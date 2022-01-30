import { findByProps } from "@cumcord/modules/webpack";

/* const { acceptInviteAndTransitionToInviteChannel } =
  findByProps("resolveInvite"); */

const icon = "🛡";

export default [
  {
    icon,
    label: "Join Guild",
    id: "guild_join_guild",
    action: async () => {
      let invite;
      try {
        invite = await commandPalette.openTextEntryAsync("Enter an invite");
      } catch {
        return;
      }
      // i have to module find here and i have no idea why. How wonderful.
      await findByProps(
        "resolveInvite"
      ).acceptInviteAndTransitionToInviteChannel(invite);
    },
  },
];
