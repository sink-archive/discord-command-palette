/**
 * @name CommandPalette
 * @author Yellowsink
 * @version 1.0.0
 * @description ye
 * @source https://github.com/yellowsink/discord-command-palette/blob/src-bd/cpalette.plugin.js
 * @updateUrl https://raw.githubusercontent.com/yellowsink/discord-command-palette/src-bd/cpalette.plugin.js
 */

const PLUGIN_URL = "https://yellowsink.github.io/discord-command-palette/";
const CC_URL = "https://raw.githubusercontent.com/Cumcord/builds/main/build.js";

const sterilise = () => {
    if (!window.cumcord) {
        console.error("window.cumcord global not found, cannot sterilise.");
        return () => {};
    }

    const {
        patcher: { after, injectCSS },
        modules: {
            webpack: { findByDisplayName, findByProps },
            common: { React },
        },
        utils: { findInReactTree },
    } = cumcord;

    const Card = findByDisplayName("Card");
    const Header = findByProps("Sizes", "Tags");

    const unpatchStyles = injectCSS(`
    .ysink_sterilise_card {
        padding: 16px 22px;
        margin-bottom: 40px;
        color: var(--text-normal);
    }
    `);

    const pluginsTabShim = (args, origElement) => {
        const topLevel = findInReactTree(
            origElement,
            (e) => e?.type?.displayName === "FormSection"
        );

        //const header = topLevel.props.children[0];
        const card = React.createElement(
            Card,
            {
                type: "cardPrimary",
                outline: false,
                editable: false,
                className: "ysink_sterilise_card",
            },
            [
                React.createElement(
                    Header,
                    { tag: "h2", size: Header.Sizes.SIZE_20 },
                    "What's this?"
                ),
                "This is the plugins page for the client mod Command Palette is built to work on. ",
                "For your convenience, the plugin for your host mod has automatically set it up for you, ",
                "and has placed this message here (as well as changed the name in the sidebar: the mod is called Cumcord).",
                React.createElement("br"),
                "To disable this patching and use stock Cumcord, see the plugin settings in your mod of choice.",
            ]
        );

        topLevel.props.children.splice(0, 0, card);

        /* topLevel.props.children[0] = React.createElement(
            "div",
            {},
            [card, header]
        ); */
    };

    let unpatchPluginPage;

    const unpatchPredicateSections = after(
        "getPredicateSections",
        findByDisplayName("SettingsView").prototype,
        (args, ret) => {
            if (!Array.isArray(ret)) return;

            const pIndex = ret.findIndex(
                (m) => m.section === "CUMCORD_PLUGINS"
            );

            if (pIndex === -1) return;

            ret[pIndex - 1].label = "CPalette required mod";

            if (ret[pIndex].element) {
                unpatchPluginPage?.();
                unpatchPluginPage = after(
                    "element",
                    ret[pIndex],
                    pluginsTabShim
                );
            }

            return ret;
        }
    );

    return () => {
        unpatchStyles();
        unpatchPredicateSections();
        unpatchPluginPage?.();
    };
};

let unloadCcAfter = true;
let disablePluginAfter = false;
let unSterilise;

module.exports = class {
   async function start() {
    debugger
    unloadCcAfter = !window.cumcord;

    if (!window.cumcord) eval(await (await fetch(CC_URL)).text());
    // wait for cumcord to complete its initialisation
    // if already loaded, this will do nothing.
    await cumcord.cum();

    unSterilise = sterilise();

    // load plugins and set state accordingly
    // unloadCcAfter - if we inject cumcord, remove after
    // disablePluginAfter - if we enable / install the plugin, disable after in the event we leave cc
    if (cumcord.plugins.installed.ghost.hasOwnProperty(PLUGIN_URL)) {
        disablePluginAfter = false;

        if (!cumcord.plugins.loaded.ghost.hasOwnProperty(PLUGIN_URL)) {
            cumcord.plugins.togglePlugin(PLUGIN_URL);
            disablePluginAfter = true;
        }
    } else {
        disablePluginAfter = true;
        await cumcord.plugins.importPlugin(PLUGIN_URL);
    }
}
    stop() {
    if (unloadCcAfter) {
        cumcord.uninject();
    } else if (disablePluginAfter) {
        cumcord.plugins.togglePlugin(PLUGIN_URL);
    }

    unSterilise?.();
}
};
