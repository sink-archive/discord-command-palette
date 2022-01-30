import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";

const { getGuild } = findByProps("getGuild");
const { getGuildSettingsSections } = findByDisplayName(
  "ConnectedGuildSettings",
  false
);

const _ogs = findByProps("saveGuild").open;
const _ggss = (guildId) =>
  getGuildSettingsSections(getGuild(guildId));

export { _ogs as openGuildSettings, _ggss as getGuildSettingsSections };
