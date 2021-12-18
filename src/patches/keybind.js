import { persist, state } from "@cumcord/pluginData";
import openPalette from "../components/Palette.jsx";

const welcomeMsg =
    "🎉 Welcome to **Command Palette**! 🎉 Start typing to pick an item from the list, or visit the API Docs to start building custom actions at https://yellowsink.github.io/cc-plugins/palette-docs";

export default (defaultEntries) => {
    let keyHandler = (e) => {
        // plugin settings is busy picking a keybind, so disable global keybinds until its done
        if (state.ghost.pickingBind) return;

        let bind = persist.ghost.keyBind;

        let correctBind =
            (e.ctrlKey || e.metaKey) == bind.ctrlMeta &&
            e.shiftKey == bind.shift &&
            e.which == bind.code;

        if (correctBind) {
            let md = persist.ghost.firstRun ? welcomeMsg : null;
            openPalette(null, persist, defaultEntries, md);
            persist.store.firstRun = false;
        }
    };

    let abortController = new AbortController();
    document.addEventListener("keyup", keyHandler, { signal: abortController.signal });

    return () => abortController.abort();
};