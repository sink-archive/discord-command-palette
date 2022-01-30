import { findByProps, find } from "@cumcord/modules/webpack";
import { showToast } from "@cumcord/ui/toasts";
import openPalette from "../components/Palette.jsx";
import { openTextEntry } from "../components/TextEntryPalette.jsx";
import { getGuildId } from "../permsHelper.js";
const { getMembers } = findByProps("getMembers");
const { getUser } = findByProps("getUser");
const { openUserProfileModal } = findByProps("openUserProfileModal");
const openUserSettings = findByProps("submitComplete").open;
const { getUserSettingsSections } = findByProps("getUserSettingsSections");
import {
  getGuildSettingsSections,
  openGuildSettings,
} from "../getGuildSettingsSections";

const icon = "🚀";

export default [
  {
    icon,
    id: "navigate_user_profile_id",
    label: "Open user profile by ID",
    action: () => {
      openTextEntry("Enter user ID", (id) => {
        setTimeout(() => {
          try {
            openUserProfileModal({ userId: id });
          } catch {
            showToast({
              title: "Failed! - Is the user ID correct?",
              duration: 3000,
            });
          }
        }, 200);
      });
    },
  },
  {
    icon,
    id: "navigate_user_profile_server",
    label: "Open user profile from current server",
    action: async () => {
      openPalette(
        "Which profile to open?",
        await Promise.all(
          getMembers(getGuildId()).map(async (member) => {
            let user = await getUser(member.userId);
            let nickstr = member.nick ? `[${member.nick}]` : "";
            return {
              id: member.userId,
              label: `${user.username}#${user.discriminator} ${nickstr} (${member.userId})`,
              icon: `https://cdn.discordapp.com/avatars/${member.userId}/${user.avatar}.webp`,
              action: () =>
                setTimeout(
                  () =>
                    openUserProfileModal({
                      userId: member.userId,
                    }),
                  200
                ),
            };
          })
        )
      );
    },
  },
  {
    icon,
    id: "navigate_user_settings",
    label: "Open user settings",
    action: () => {
      openPalette(
        "Which section to open?",
        Object.values(getUserSettingsSections("")).map((val) => ({
          id: val.section,
          label: val.label,
          action: () => openUserSettings(val.section),
        }))
      );
    },
  },
  {
    icon,
    id: "navigate_guild_settings",
    label: "Open guild settings",
    condition: getGuildId,
    action: () => {
      openPalette(
        "Which section to open?",
        Object.values(getGuildSettingsSections(getGuildId())).map((val) => ({
          id: val.section,
          label: val.ariaLabel ?? val.label,
          // ew setTimeout
          action: () => setTimeout(() => openGuildSettings(getGuildId(), val.section)),
        }))
      );
    },
  },
];
