import moderation from "./builtInEntries/moderation.js";
import cumcord from "./builtInEntries/cumcord.js";
import reboots from "./builtInEntries/reboots.js";
import navigation from "./builtInEntries/navigation.js";
import misc from "./builtInEntries/misc.js";
import guild from "./builtInEntries/guild.js";

const source = "Built In";

const entries = moderation
  .concat(cumcord)
  .concat(reboots)
  .concat(navigation)
  .concat(misc)
  .concat(guild)
  .map((e) => ({
    source,
    ...e,
  }));
export default entries;

export { entries, source as builtInSource };
