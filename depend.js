/*============================================================================*\
|  The textbook example of using Command Palette in another plugin             |
|  call the exported function to load entries,                                 |
|  and deal cleanly with command palette being uninstalled, reloaded, etc etc  |
|  the exported function's return is another function to unload the entries    |
\*============================================================================*/

/*=====================================*\
|  boilerplate, no need to change this  |
\*=====================================*/
import { loaded } from "@cumcord/plugins";
import { SET } from "@cumcord/modules/internal/nests/Events";

const commandPalettePluginIds = [
    "https://yellowsink.github.io/cc-plugins/command-palette/",
    "https://yellowsink.github.io/discord-command-palette/",
    "https://cumcordplugins.github.io/Condom/yellowsink.github.io/discord-command-palette/",
];

export default () => {
    let unpatch;

    const listener = (eventType, { path }) => {
        if (commandPalettePluginIds.includes(path[0])) {
            unpatch?.();
            unpatch = patch();
        }
    };

    if (window.commandPalette) unpatch = patch();
    else loaded.on(SET, listener);

    return () => {
        unpatch?.();
        loaded.off(SET, listener);
    };
};

/*==============================================================*\
|  the command palette API is available to you in this function  |
\*==============================================================*/
const patch = () => {
    commandPalette.registerEntry(
        "My epic plugin",
        "epicplugin_epicaction",
        "My epic Action",
        "🚀",
        async () => {
            try {
                const choice = await commandPalette.openPaletteAsync(
                    "Pick from the list:",
                    ["🚀", "🚀🚀", "🚀🚀🚀", "🚀🚀🚀🚀"],
                    "You ran my *amazing* action. **Pick one from the list below**!"
                );
                console.log(`The user picked: ${choice}`);
            } catch {
                console.log("The user did not pick a choice.");
            }
        }
    );

    return () => window.commandPalette?.unregisterSource("My epic plugin");
};
