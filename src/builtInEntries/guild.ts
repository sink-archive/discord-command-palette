import { findByProps } from "@cumcord/modules/webpack";
import { SourceLessEntry } from "../types";

/* const { acceptInviteAndTransitionToInviteChannel } =
  findByProps("resolveInvite"); */

const icon = "🛡";

const entries: SourceLessEntry[] = [
  {
    icon,
    label: "Join Guild",
    id: "guild_join_guild",
    action: async () => {
      let invite;
      try {
        // @ts-expect-error
        invite = await commandPalette.openTextEntryAsync("Enter an invite");
      } catch {
        return;
      }
      // i have to module find here and i have no idea why. How wonderful.
      await (
        findByProps("resolveInvite") as any
      ).acceptInviteAndTransitionToInviteChannel(invite);
    },
  },
];

export default entries;