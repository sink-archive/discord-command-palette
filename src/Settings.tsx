import React from "react"; // sperm will make this resolve to cumcord's React

import { persist, state } from "@cumcord/pluginData";

import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { useNest } from "@cumcord/utils";

const FormText = findByDisplayName("FormText");
const Button: any = findByProps("Sizes", "Colors", "Looks", "DropdownSizes");

const eventListenerPatch = () => {
  const keyHandler = (e: KeyboardEvent) => {
    persist.store.keyBind.code = e.code;
    state.store.pickingBind = false;
  };

  document.addEventListener("keyup", keyHandler, { once: true });
  return () =>
    document.removeEventListener("keyup", keyHandler, {
      once: true,
    } as AddEventListenerOptions);
};

export default () => {
  useNest(state);
  useNest(persist);

  let removeEvent = React.useRef(() => {});

  removeEvent.current();
  if (state.ghost.pickingBind) removeEvent.current = eventListenerPatch();

  return (
    <div className="ysink_palette_settings_container">
      <div className="ysink_palette_settings">
        <FormText className="ysink_palette_slabel">
          Keycode:{" "}
          {persist.ghost.keyBind.code.startsWith("Key")
            ? persist.ghost.keyBind.code.substring(3)
            : persist.ghost.keyBind.code}
        </FormText>

        <Button
          className="ysink_palette_sbutton"
          size={Button.Sizes.TINY}
          color={
            state.ghost.pickingBind ? Button.Colors.RED : Button.Colors.GREEN
          }
          look={Button.Looks.OUTLINED}
          onClick={() => (state.store.pickingBind = !state.ghost.pickingBind)}
          onBlur={() => (state.store.pickingBind = false)}
        >
          {state.ghost.pickingBind ? "Cancel" : "Change"}
        </Button>

        <FormText className="ysink_palette_sdesc">
          This is the physical location of the key on your keyboard.
          <br />
          If you use an alternate layout such as Dvorak, Colemak, Workman, etc,
          this will be wrong.
        </FormText>

        <FormText className="ysink_palette_slabel">Shift</FormText>
        <input
          className="ysink_palette_sinput"
          type="checkbox"
          onChange={(e) => (persist.store.keyBind.shift = e.target.checked)}
          checked={persist.ghost.keyBind.shift}
          disabled={state.ghost.pickingBind}
        />

        <FormText className="ysink_palette_slabel">
          Ctrl / Meta / Cmd ⌘
        </FormText>
        <input
          className="ysink_palette_sinput"
          type="checkbox"
          onChange={(e) => (persist.store.keyBind.ctrlMeta = e.target.checked)}
          checked={persist.ghost.keyBind.ctrlMeta}
          disabled={state.ghost.pickingBind}
        />
      </div>
    </div>
  );
};
