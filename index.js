const { Plugin } = require("@vizality/entities");
const sterilise = require("./src/sterilise");

const PLUGIN_URL = "https://yellowsink.github.io/discord-command-palette/";
const CC_URL = "https://raw.githubusercontent.com/Cumcord/builds/main/build.js";

const pluginIsInstalled = () =>
    window.cumcord?.plugins.installed.ghost[PLUGIN_URL];
const pluginIsEnabled = () =>
    window.cumcord?.plugins.installed.ghost[PLUGIN_URL]?.enabled;

module.exports = class CommandPalette extends Plugin {
    constructor() {
        super();
        this.unloadCcAfter = true;
        this.disablePluginAfter = false;
        this.unSterilise = null;
    }

    async start() {
        this.unloadCcAfter = !window.cumcord;

        if (!window.cumcord) eval(await (await fetch(CC_URL)).text());

        // wait for cumcord to fully load
        await cumcord.cum();

        this.unSterilise = sterilise();

        // load plugins and set state accordingly
        // unloadCcAfter - if we inject cumcord, remove after
        // disablePluginAfter - if we enable / install the plugin, disable after in the event we leave cc
        this.disablePluginAfter = false;

        if (!pluginIsInstalled()) {
            this.disablePluginAfter = true;
            await cumcord.plugins.importPlugin(PLUGIN_URL);
        }

        if (!pluginIsEnabled()) {
            cumcord.plugins.togglePlugin(PLUGIN_URL);
            this.disablePluginAfter = true;
        }
    }

    stop() {
        if (this.unloadCcAfter) {
            window.cumcord?.uninject();
        } else if (this.disablePluginAfter) {
            window.cumcord?.plugins.togglePlugin(PLUGIN_URL);
        }

        this.unSterilise?.();
    }
};
