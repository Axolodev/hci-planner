import plan from "@/data/plan";
import { Plan } from "@/types";
import { createStore } from "zustand/vanilla";
import { modifyPath, path } from "ramda";

export const localStorageKey = "coursesStatus";

type ModuleType = {
  isCompleted: boolean;
};

type SectionOption = {
  modules: ModuleType[];
};

type SectionType = {
  options: SectionOption[];
};

type CoursesStateType = {
  sections: Record<string, SectionType>;
};

export type CoursesActionsType = {
  // Save the current state to local storage
  saveInLocalStorage: (state: CoursesStateType) => void;
  // Reset all courses status
  reset: () => void;
  // Sets the current status for a module
  setModuleStatus: (
    sectionName: string,
    optionIndex: number,
    moduleIndex: number,
    status: boolean
  ) => void;
  // Gets the current status for a module
  getModuleStatus: (
    sectionName: string,
    optionIndex: number,
    moduleIndex: number
  ) => boolean;
  // Gets whether a Section has been started
  isSectionStarted: (sectionName: string) => boolean;
  // Gets whether any neighbour section has been started
  isNeighbourSectionOptionStarted: (
    sectionName: string,
    optionIndex: number
  ) => boolean;
};

export type CoursesStoreType = CoursesStateType & CoursesActionsType;

export const defaultInitState: CoursesStateType = {
  sections: {},
};

export const convertPlanToStatus = (plan: Plan) => {
  const sections: Record<string, SectionType> = {};
  plan.sections.forEach((section) => {
    const options: SectionOption[] = section.options.map((option) => {
      const modules: ModuleType[] = option.modules.map(() => ({
        isCompleted: false,
      }));
      return {
        modules,
      };
    });
    sections[section.title] = { options };
  });
  return sections;
};

export const initCounterStore = (): CoursesStateType => {
  if (typeof window === "undefined") {
    return defaultInitState;
  }
  const courses = localStorage.getItem(localStorageKey);
  if (courses) {
    return JSON.parse(courses);
  }
  return {
    ...defaultInitState,
    sections: convertPlanToStatus(plan),
  };
};

function isSectionOptionStarted(sectionOption: SectionOption) {
  return sectionOption.modules.some((module) => module.isCompleted);
}

function isSectionStarted(section: SectionType) {
  return section.options.some(isSectionOptionStarted);
}

export const createCoursesStore = (
  initState: CoursesStateType = defaultInitState
) => {
  return createStore<CoursesStoreType>((set, get) => ({
    ...initState,
    saveInLocalStorage: () => {
      localStorage.setItem(localStorageKey, JSON.stringify(get()));
    },
    reset: () => {
      set(initState);
      get().saveInLocalStorage(initState);
    },
    setModuleStatus: (sectionName, optionIndex, moduleIndex, status) => {
      set((state) => ({
        ...state,
        sections: modifyPath(
          [
            sectionName,
            "options",
            optionIndex,
            "modules",
            moduleIndex,
            "isCompleted",
          ],
          () => status,
          state.sections
        ),
      }));
    },
    getModuleStatus: (sectionName, optionIndex, moduleIndex) => {
      return (
        path(
          [
            sectionName,
            "options",
            optionIndex,
            "modules",
            moduleIndex,
            "isCompleted",
          ],
          get().sections
        ) || false
      );
    },
    isSectionStarted(sectionName) {
      const currentSection = get().sections[sectionName];
      if (!currentSection) {
        return false;
      }
      return isSectionStarted(currentSection);
    },
    isNeighbourSectionOptionStarted(sectionName, optionIndex) {
      const currentSection = get().sections[sectionName];
      if (!currentSection) {
        return false;
      }
      return currentSection.options.some((option, index) => {
        if (index === optionIndex) {
          return false;
        }
        return isSectionOptionStarted(option);
      });
    },
  }));
};
