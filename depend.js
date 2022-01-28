// if you don't want to use an npm dep, cry

/*============================================================================*\
|  The textbook example of using Command Palette in another plugin             |
|  call the exported function to load entries,                                 |
|  and deal cleanly with command palette being uninstalled, reloaded, etc etc  |
|  the exported function's return is another function to unload the entries    |
\*============================================================================*/

import { depend } from "cumcord-tools";

const commandPalettePluginIds = [
    "https://yellowsink.github.io/discord-command-palette/",
    "https://cumcordplugins.github.io/Condom/yellowsink.github.io/discord-command-palette/",
];

const source = "My epic plugin";

const patch = () => {
    commandPalette.registerEntry({
        source,
        id: "epicplugin_epicaction",
        icon: "🚀",
        action: async () => {
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
        },
    });

    return () => window.commandPalette?.unregisterSource(source);
};

export default () => depend(commandPalettePluginIds, patch);
