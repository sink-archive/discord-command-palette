import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";

// @ts-expect-error
const { getGuild } = findByProps("getGuild");
const { getGuildSettingsSections } = findByDisplayName(
  "ConnectedGuildSettings",
  // @ts-expect-error
  false
);

// @ts-expect-error
const _ogs = findByProps("saveGuild").open;
const _ggss = (guildId: string) =>
  getGuildSettingsSections(getGuild(guildId));

export { _ogs as openGuildSettings, _ggss as getGuildSettingsSections };
