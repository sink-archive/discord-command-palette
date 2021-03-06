import { findByProps } from "@cumcord/modules/webpack";
import { getChannelId } from "@cumcord/modules/common/channels";
import openAbout from "../components/AboutPalette.jsx";

import { getGuildId } from "../permsHelper.js";
const { updateChannelOverrideSettings } = findByProps(
  "updateChannelOverrideSettings"
);
const { getCurrentChannelSettings } = findByProps("getCurrentChannelSettings");
const { updateGuildNotificationSettings } = findByProps(
  "updateGuildNotificationSettings"
);
const { isMuted } = findByProps("getMuteConfig");

export default [
  {
    icon: "🔇",
    id: "misc_toggle_channel_mute",
    label: "Toggle current channel mute",
    action: () => {
      let muted = getCurrentChannelSettings(
        getGuildId(),
        getChannelId()
      ).channel_is_muted;
      // i don't know if these last two fields are actually necessary or not, but just to be safe :)
      updateChannelOverrideSettings(getGuildId(), getChannelId(), {
        muted: !muted,
        suppress_everyone: !muted,
        suppress_roles: !muted,
      });
    },
  },
  {
    icon: "🔇",
    id: "misc_toggle_guild_mute",
    label: "Toggle current guild mute",
    action: () => {
      let muted = isMuted(getGuildId());
      updateGuildNotificationSettings(getGuildId(), {
        muted: !muted,
        suppress_everyone: !muted,
        suppress_roles: !muted,
      });
    },
  },
  {
    icon: "ℹ",
    id: "misc_show_about",
    label: "About Command Palette",
    action: () => {
      openAbout();
    },
  },
];
