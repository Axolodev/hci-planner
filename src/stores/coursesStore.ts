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
  getIsSectionStarted: (sectionName: string) => boolean;
  // Gets whether any neighbour section has been started
  getIsNeighbourSectionOptionStarted: (
    sectionName: string,
    optionIndex: number
  ) => boolean;
  // Gets whether a section has been completed
  getIsSectionCompleted: (sectionName: string) => boolean;
  // Gets whether the plan has been completed
  getIsPlanCompleted: () => boolean;
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

export const initCounterStore = (plan: Plan): CoursesStateType => {
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

function isSectionOptionCompleted(sectionOption: SectionOption) {
  return sectionOption.modules.every((module) => module.isCompleted);
}

function isPlanCompleted(sections: Record<string, SectionType>) {
  return Object.values(sections).every((section) => isSectionStarted(section));
}

export const createCoursesStore = (
  initState: CoursesStateType = defaultInitState
) => {
  return createStore<CoursesStoreType>((set, get) => ({
    ...initState,
    reset: () => {
      set(initState);
    },
    setModuleStatus: (sectionName, optionIndex, moduleIndex, status) => {
      set((state) => {
        const newState = {
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
        };
        return newState;
      });
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
    getIsSectionStarted(sectionName) {
      const currentSection = get().sections[sectionName];
      if (!currentSection) {
        return false;
      }
      return isSectionStarted(currentSection);
    },
    getIsNeighbourSectionOptionStarted(sectionName, optionIndex) {
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
    getIsSectionCompleted(sectionName) {
      const currentSection = get().sections[sectionName];
      if (!currentSection) {
        return false;
      }
      return currentSection.options.some(isSectionOptionCompleted);
    },
    getIsPlanCompleted: () => {
      return isPlanCompleted(get().sections);
    },
  }));
};
