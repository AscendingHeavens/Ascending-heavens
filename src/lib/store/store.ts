"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { StateCreator } from "zustand";

import { contactSlice, ContactState } from "./slices/contactSlice";

export interface StoreState {
  contact: ContactState;
}

export type StoreSlice<T, R> = StateCreator<
  T,
  [["zustand/immer", never]],
  [],
  R
>;

export const useStore = create<StoreState>()(
  immer((...stateArgs) => ({
    contact: contactSlice(...stateArgs),
  }))
);
