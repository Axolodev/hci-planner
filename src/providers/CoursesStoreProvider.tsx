import {
  CoursesStoreType,
  createCoursesStore,
  initCounterStore,
} from "@/stores/coursesStore";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

// Define provides for React
export type CoursesStoreApi = ReturnType<typeof createCoursesStore>;

export const CoursesStoreContext = createContext<CoursesStoreApi | undefined>(
  undefined
);

export interface CoursesStoreProviderProps {
  children: ReactNode;
}

export const CoursesStoreProvider = ({
  children,
}: CoursesStoreProviderProps) => {
  const storeRef = useRef<CoursesStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCoursesStore(initCounterStore());
  }

  return (
    <CoursesStoreContext.Provider value={storeRef.current}>
      {children}
    </CoursesStoreContext.Provider>
  );
};

// Define a hook to access the store
export const useCoursesStore = <T,>(
  selector: (store: CoursesStoreType) => T
): T => {
  const coursesStoreContext = useContext(CoursesStoreContext);

  if (!coursesStoreContext) {
    throw new Error(`useCoursesStore must be used within CoursesStoreProvider`);
  }

  return useStore(coursesStoreContext, selector);
};
