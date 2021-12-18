import data from "@cumcord/pluginData";

import injectCss from "./styles.sass";
import keybindPatch from "./patches/keybind.js";
import paletteEntries from "./paletteEntries.js";
import exposeApiPatch from "./patches/exposeApi.js";

import Settings from "./Settings";
import { createElement } from "@cumcord/modules/common/React";
import { nests } from "@cumcord/modules/internal";

export default ({ persist, id }) => {
    // init persist
    if (!persist.ghost.keyBind)
        persist.store.keyBind = {
            ctrlMeta: true,
            shift: true,
            code: 80,
        };
    
    if (!persist.ghost.usageCounts)
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
