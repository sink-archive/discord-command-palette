import { findByProps } from "@cumcord/modules/webpack";
import { canBan, canKick, getGuildId } from "../permsHelper.js";
import openPalette from "../components/Palette.jsx";
import { openTextEntry } from "../components/TextEntryPalette.jsx";
const { getMembers } = findByProps("getMembers");
const { getUser } = findByProps("getUser");
const { banUser, kickUser } = findByProps("banUser");

const icon = "🛠";

export default [
  {
    icon,
    id: "moderation_banuser",
    label: "Ban user from current guild",
    condition: canBan,
    action: async () => {
      openPalette(
        "Which user to ban?",
        await Promise.all(
          getMembers(getGuildId()).map(async (member) => {
            let user = await getUser(member.userId);
            let nickstr = member.nick ? `[${member.nick}]` : "";
            return {
              id: member.userId,
              label: `${user.username}#${user.discriminator} ${nickstr} (${member.userId})`,
              icon: `https://cdn.discordapp.com/avatars/${member.userId}/${user.avatar}.webp`,
              action: () =>
                openTextEntry("Enter ban reason", (reason) => {
                  banUser(getGuildId(), member.userId, null, reason);
                }),
            };
          })
        )
      );
    },
  },
  {
    icon,
    id: "moderation_kickuser",
    label: "Kick user from current guild",
    condition: canKick,
    action: async () => {
      openPalette(
        "Which user to kick?",
        await Promise.all(
          getMembers(getGuildId()).map(async (member) => {
            let user = await getUser(member.userId);
            let nickstr = member.nick ? `[${member.nick}]` : "";
            return {
              id: member.userId,
              label: `${user.username}#${user.discriminator} ${nickstr} (${member.userId})`,
              icon: `https://cdn.discordapp.com/avatars/${member.userId}/${user.avatar}.webp`,
              action: () =>
                openTextEntry("Enter kick reason", (reason) => {
                  kickUser(getGuildId(), member.userId, reason);
                }),
            };
          })
        )
      );
    },
  },
];
