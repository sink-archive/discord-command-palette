import type { Nest } from "nests/types";

export type SourceLessEntry = {
  id: string;
  icon?: string;
  label: string;
  condition?: () => boolean;
  action: () => void;
};

export type Entry = {
  id: string;
  icon?: string;
  label: string;
  source: string;
  condition?: () => boolean;
  action: () => void;
};

export type UsageCounts = Map<string, number>;

export type KeyBind = {
  ctrlMeta: boolean;
  shift: boolean;
  code: string;
};

export type PersistNest = Nest<{ keyBind: KeyBind; usageCounts: UsageCounts }>;

export type StateNest = Nest<any>;

declare module "@cumcord/pluginData" {
  export const persist: PersistNest;
  export const state: StateNest;
  const _default: { persist: PersistNest; state: StateNest };
  export default _default;
}