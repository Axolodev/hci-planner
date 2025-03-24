import { createStore } from "zustand/vanilla";
export const localStorageKey = "coursesStatus";

// Define the store for Zustand
export type CoursesStateType = {
  version: number;
};

export type CoursesActionsType = {
  // Automatically migrate versions of our local storage data to the latest version
  migrateVersion: () => void;
  // Save the current state to local storage
  saveInLocalStorage: () => void;
  // Load the state from local storage
  loadFromLocalStorage: () => void;
};

export type CoursesStoreType = CoursesStateType & CoursesActionsType;

export const defaultInitState: CoursesStateType = {
  version: 1,
};

export const initCounterStore = (): CoursesStateType => {
  if (typeof window === "undefined") {
    return defaultInitState;
  }
  const courses = localStorage.getItem(localStorageKey);
  if (courses) {
    return JSON.parse(courses);
  }
  return defaultInitState;
};

export const createCoursesStore = (
  initState: CoursesStateType = defaultInitState
) => {
  return createStore<CoursesStoreType>((set) => ({
    ...initState,
    migrateVersion: () => {
      set((state) => ({
        ...state,
        version: state.version + 1,
      }));
    },
    saveInLocalStorage: () => {
      localStorage.setItem(localStorageKey, JSON.stringify(initState));
    },
    loadFromLocalStorage: () => {
      const courses = localStorage.getItem(localStorageKey);
      if (courses) {
        set(JSON.parse(courses));
      }
    },
  }));
};
