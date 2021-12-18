import pluginData from "@cumcord/pluginData";

import injectCss from "./styles.sass";
import keybindPatch from "./patches/keybind.js";
import paletteEntries from "./paletteEntries.js";
import exposeApiPatch from "./patches/exposeApi.js";

import Settings from "./Settings";
import React from "@cumcord/modules/common/React";
import { nests } from "@cumcord/modules/internal";

export default ({ persist, id }) => {
    // initialise nest
    persist.store.customEntries = [];
    if (!persist.ghost.keyBind)
        persist.store.keyBind = {
            ctrlMeta: true,
            shift: true,
            code: 80,
        };

    pluginData.state = nests.make({ pickingBind: false });

    // load patches
    let patches = [
        injectCss(),
        keybindPatch(paletteEntries),
        exposeApiPatch(),
    ];

    // remove patches and reset custom entries
    return {
        onLoad() {},
        onUnload() {
            persist.store.customEntries = [];
            delete persist.store.customEntries;
            patches.forEach((unpatch) => unpatch());
        },

        settings: React.createElement(Settings),
    };
};
