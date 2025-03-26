import { createStore } from "zustand/vanilla";
import {
  persist,
  StateStorage,
  createJSONStorage,
  PersistOptions,
} from "zustand/middleware";
import { Plan } from "@/types";

export const localStorageKey = "coursesStatus";

type ModuleType = {
  isCompleted: boolean;
};

type CoursesStateType = {
  sections: Record<string, ModuleType[][]>;
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

const getUrlSearch = () => {
  return window.location.search.slice(1);
};

const persistentStorage: StateStorage = {
  getItem: (key): string => {
    // Check URL first
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      const storedValue = searchParams.get(key);
      return JSON.parse(storedValue as string);
    } else {
      // Otherwise, we should load from localstorage or alternative storage
      return JSON.parse(localStorage.getItem(key) as string);
    }
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.set(key, JSON.stringify(newValue));
    window.history.replaceState(null, "", `?${searchParams.toString()}`);

    localStorage.setItem(key, JSON.stringify(newValue));
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.delete(key);
    window.location.search = searchParams.toString();
  },
};

export type CoursesStoreType = CoursesStateType & CoursesActionsType;

export const defaultInitState: CoursesStateType = {
  sections: {},
};

const storageOptions: PersistOptions<CoursesStoreType> = {
  name: localStorageKey,
  storage: createJSONStorage<CoursesStoreType>(() => persistentStorage),
};

export const convertPlanToStatus = (plan: Plan) => {
  const sections: Record<string, ModuleType[][]> = {};
  plan.sections.forEach((section) => {
    const options: ModuleType[][] = section.options.map((option) => {
      return option.modules.map(() => ({
        isCompleted: false,
      }));
    });
    sections[section.title] = options;
  });
  return sections;
};

export const initCounterStore = (plan: Plan): CoursesStateType => {
  return {
    sections: convertPlanToStatus(plan),
  };
};

export const createCoursesStore = (
  initState: CoursesStateType = defaultInitState
) => {
  return createStore(
    persist<CoursesStoreType>(
      (set, get) => ({
        ...initState,
        reset: () => {
          set(initState);
        },
        setModuleStatus: (sectionName, optionIndex, moduleIndex, status) => {
          set((state) => {
            const newState = {
              ...state,
              sections: {
                ...state.sections,
                [sectionName]: state.sections[sectionName].map(
                  (option, optIdx) =>
                    optIdx === optionIndex
                      ? option.map((module, modIdx) =>
                          modIdx === moduleIndex
                            ? { ...module, isCompleted: status }
                            : module
                        )
                      : option
                ),
              },
            };
            return newState;
          });
        },
        getModuleStatus: (sectionName, optionIndex, moduleIndex) => {
          return (
            get().sections[sectionName]?.[optionIndex]?.[moduleIndex]
              ?.isCompleted || false
          );
        },
        getIsSectionStarted: (sectionName) => {
          const section = get().sections[sectionName];
          if (!section) return false;
          return section.some((option) =>
            option.some((module) => module.isCompleted)
          );
        },
        getIsNeighbourSectionOptionStarted: (sectionName, optionIndex) => {
          const section = get().sections[sectionName];
          if (!section) return false;
          return section.some((option, idx) =>
            idx !== optionIndex
              ? option.some((module) => module.isCompleted)
              : false
          );
        },
        getIsSectionCompleted: (sectionName) => {
          const section = get().sections[sectionName];
          if (!section) return false;

          return section.some((option) =>
            option.every((module) => module.isCompleted)
          );
        },
        getIsPlanCompleted: () => {
          return Object.values(get().sections).every((section) =>
            section.every((option) =>
              option.every((module) => module.isCompleted)
            )
          );
        },
      }),
      storageOptions
    )
  );
};
