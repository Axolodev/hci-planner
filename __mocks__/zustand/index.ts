// __mocks__/zustand.ts

import type * as ZustandExportedTypes from "zustand";
export * from "zustand";

const { create: actualCreate } =
  jest.requireActual<typeof ZustandExportedTypes>("zustand");

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand createUncurried mock");

  const store = actualCreate(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand create mock");

  // to support curried version of create
  return typeof stateCreator === "function"
    ? createUncurried(stateCreator)
    : createUncurried;
}) as typeof ZustandExportedTypes.create;
