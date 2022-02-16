import data from "@cumcord/pluginData";

// @ts-expect-error
import injectCss from "./styles.sass";
import keybindPatch from "./patches/keybind.js";
import paletteEntries from "./paletteEntries.js";
import exposeApiPatch from "./patches/exposeApi.js";

import Settings from "./Settings";
import { createElement } from "react";
import { nests } from "@cumcord/modules/internal";
import { PersistNest } from "./types";

export default ({ persist }: { persist: PersistNest }) => {
  // init persist
  if (!persist.ghost.keyBind)
    persist.store.keyBind = {
      ctrlMeta: true,
      shift: true,
      code: "KeyP",
    };

  if (!(persist.ghost.usageCounts instanceof Map))
    persist.store.usageCounts = new Map();

  // init state
  data.state = nests.make({ pickingBind: false, customEntries: [] });

  // load patches
  const patches = [injectCss(), keybindPatch(paletteEntries), exposeApiPatch()];

  // remove patches
  return {
    onUnload: () => patches.forEach((unpatch) => unpatch()),
    settings: createElement(Settings),
  };
};
