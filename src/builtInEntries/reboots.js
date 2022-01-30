const icon = "♻";

export default [
  {
    icon,
    id: "reboot_reload",
    label: "Reload Discord",
    action: () => window.location.reload(),
  },
  {
    icon,
    id: "reboot_relaunch",
    label: "Relaunch Discord to updater",
    condition: () => window.DiscordNative,
    action: () => window.DiscordNative.app.relaunch(),
  },
];
