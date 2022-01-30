import plugins from "@cumcord/plugins";
import { showToast } from "@cumcord/ui/toasts";
import { showConfirmationModal } from "@cumcord/ui/modals";
import { uninject, dev } from "@cumcord";
import textEntry from "../components/TextEntryPalette.jsx";
import openPalette from "../components/Palette.jsx";

const icon = "💧";

export default [
  {
    icon,
    id: "cumcord_installplug",
    label: "Install plugin from URL",
    action: async () => {
      try {
        let url = await textEntry("Enter URL");
        await plugins.importPlugin(url);
        showToast({
          title: "Installed plugin",
          duration: 3000,
        });
      } catch {}
    },
  },
  {
    icon,
    id: "cumcord_removeplug",
    label: "Remove plugin",
    action: () => {
      let plugs = Object.keys(plugins.installed.ghost).map((k) => [
        k,
        plugins.installed.ghost[k],
      ]);

      openPalette(
        "Choose plugin to remove",
        plugs.map((plugin) => ({
          id: plugin[0],
          label: plugin[1].manifest.name,
          action: () => plugins.removePlugin(plugin[0]),
        }))
      );
    },
  },
  {
    icon,
    id: "cumcord_toggleplug",
    label: "Toggle plugin",
    action: () => {
      let plugs = Object.keys(plugins.installed.ghost).map((k) => [
        k,
        plugins.installed.ghost[k],
      ]);

      openPalette(
        "Choose plugin to toggle",
        plugs.map((plugin) => ({
          id: plugin[0],
          icon: plugin[1].enabled ? "🟢 " : "🔴 ",
          label: plugin[1].manifest.name,
          action: () => plugins.togglePlugin(plugin[0]),
        }))
      );
    },
  },
  {
    icon,
    id: "cumcord_uninject",
    label: "Uninject Cumcord",
    action: () =>
      setTimeout(async () => {
        // i know setTimeout is bad but
        let confirmed = await showConfirmationModal({
          header: "Really uninject Cumcord?",
          content:
            "This will disable all of your plugins, and Cumcord will be completely removed",
          type: "danger",
          confirmText: "Uninject",
          cancelText: "Actually, never mind",
        });

        if (confirmed) uninject();
      }, 500),
  },

  {
    icon,
    id: "cumcord_toggle_dev",
    label: "Toggle DevMode",
    condition: () => dev,
    action: dev?.toggleDevMode,
  },
];
