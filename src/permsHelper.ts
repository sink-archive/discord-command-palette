import { findByProps } from "@cumcord/modules/webpack";
// @ts-expect-error
const { getGuildPermissions } = findByProps("getGuildPermissions");
// @ts-expect-error
const { getLastSelectedGuildId } = findByProps("getLastSelectedGuildId");

const can = (guildId: string, perm: bigint) => {
  let guildperms = getGuildPermissions({ id: guildId });
  if (guildperms && (guildperms & perm) !== 0n) {
    return true;
  } else {
    return false;
  }
};

const canBan = () => can(getLastSelectedGuildId(), 4n);
const canKick = () => can(getLastSelectedGuildId(), 2n);

export default can;
export { can, canBan, canKick, getLastSelectedGuildId as getGuildId };
