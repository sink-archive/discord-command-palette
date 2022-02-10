const { Plugin } = require("@vizality/entities");
const sterilise = require("./src/sterilise");

const PLUGIN_URL = "https://yellowsink.github.io/discord-command-palette/";
const CC_URL = "https://raw.githubusercontent.com/Cumcord/builds/main/build.js";

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
        // wait for cumcord to complete its initialisation
        // if already loaded, this will do nothing.
        await cumcord.cum();

        this.unSterilise = sterilise();

        // load plugins and set state accordingly
        // unloadCcAfter - if we inject cumcord, remove after
        // disablePluginAfter - if we enable / install the plugin, disable after in the event we leave cc
        if (cumcord.plugins.installed.ghost.hasOwnProperty(PLUGIN_URL)) {
            this.disablePluginAfter = false;

            if (!cumcord.plugins.loaded.ghost.hasOwnProperty(PLUGIN_URL)) {
                cumcord.plugins.togglePlugin(PLUGIN_URL);
                this.disablePluginAfter = true;
            }
        } else {
            this.disablePluginAfter = true;
            await cumcord.plugins.importPlugin(PLUGIN_URL);
        }
    }

    stop() {
        if (this.unloadCcAfter) {
            cumcord.uninject();
        } else if (this.disablePluginAfter) {
            cumcord.plugins.togglePlugin(PLUGIN_URL);
        }

        this.unSterilise?.();
    }
};
