import { state } from "@cumcord/pluginData";
import { log } from "@cumcord/utils/logger";
import { entries as builtInEntries, builtInSource } from "../paletteEntries.js";
import { openPalette, openPalettePromisified } from "../components/Palette.jsx";
import {
  openTextEntry,
  openTextEntryPromise,
} from "../components/TextEntryPalette.jsx";
import { Entry } from "../types.js";

export default () => {
  // @ts-expect-error
  window.commandPalette = {
    openPalette,

    openPaletteAsync: openPalettePromisified,

    openTextEntry,
    openTextEntryAsync: openTextEntryPromise,

    registerEntry(entry: Entry) {
      const { source, id, label, icon, action, condition } = entry;

      // make sure people supply all required items
      if (!id || id == "")
        throw "Register failed: Please supply an ID (string) for your entry";
      if (!source || source == "")
        throw "Register failed: Please identify a source (string) for your entry";
      if (!label || label == "")
        throw "Register failed: Please supply a label (string) for your entry";
      if (!action)
        throw "Register failed: Please supply an action (JS function) for your entry";
      // don't let people pretend to be built in!
      if (source == builtInSource)
        throw "Register failed: That source is reserved for built in entries";
      // don't let people take existing IDs
      if (builtInEntries.find((e) => e.id == id) != undefined)
        throw "Register failed: Entry ID taken by a built in entry";
      let index = state.ghost.customEntries.findIndex((e: Entry) => e.id == id);
      if (index != -1)
        throw `Register failed: Entry ID taken by entry from source ${state.ghost.customEntries[index].source}`;

      state.ghost.customEntries.push(entry);
    },

    unregisterEntry(id: string) {
      // make sure people supply all required items
      if (!id || id == "")
        throw "Unregister failed: Please supply an ID (string) to deregister";

      let entries: Entry[] = state.ghost.customEntries;
      let index = entries.findIndex((e) => e.id == id);
      if (index == -1)
        throw "Unregister failed: No entry with that ID could be found";

      let removedEntry = entries[index];
      entries.splice(index, 1);
      state.store.customEntries = entries;
      return removedEntry;
    },

    unregisterSource(source: string) {
      let entries: Entry[] = state.ghost.customEntries;
      let notSourceEntries = entries.filter((e) => e.source != source);
      if (notSourceEntries.length == entries.length) return undefined;
      state.store.customEntries = notSourceEntries;
      return entries.filter((e) => e.source == source);
    },

    getEntries: () => builtInEntries.concat(state.ghost.customEntries),
  };

  log("|| COMMAND PALETTE || Initialised window.commandPalette API");

  return () => {
    // @ts-expect-error
    window.commandPalette = undefined;
    // @ts-expect-error
    delete window.commandPalette;
    log("|| COMMAND PALETTE || Disposed window.commandPalette API");
  };
};
