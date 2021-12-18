import { persist, state } from "@cumcord/pluginData"

import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { useNest } from "@cumcord/utils";

const FormText = findByDisplayName("FormText");
const Button = findByProps("Sizes", "Colors", "Looks", "DropdownSizes");

export default () => {
    useNest(state);
    useNest(persist);

    if (state.ghost.pickingBind) {
        const keyHandler = (e) => {
            persist.store.keyBind.code = e.which;
            state.store.pickingBind = false;
        };

        document.addEventListener("keyup", keyHandler, { once: true });
    }

    // stop clueless idiots leaving the bind chooser on
    /* if (stateNest.ghost.pickingBind)
        setTimeout(() => {
            if (stateNest.ghost.pickingBind)
                stateNest.store.pickingBind = false;
        }, 10_000); */

    return (
        <div className="ysink_palette_settings_container">
            <div className="ysink_palette_settings">
                <FormText className="ysink_palette_slabel">
                    Keycode: {String.fromCharCode(persist.ghost.keyBind.code)}
                </FormText>

                <Button
                    className="ysink_palette_sbutton"
                    size={Button.Sizes.TINY}
                    color={
                        state.ghost.pickingBind
                            ? Button.Colors.RED
                            : Button.Colors.GREEN
                    }
                    look={Button.Looks.OUTLINED}
                    onClick={() =>
                        (state.store.pickingBind =
                            !state.ghost.pickingBind)
                    }
                    onBlur={
                        /* stop clueless idiots leaving the bind chooser on, but actually this time */
                        () => (state.store.pickingBind = false)
                    }
                >
                    {state.ghost.pickingBind ? "Cancel" : "Change"}
                </Button>

                <FormText className="ysink_palette_slabel">Shift</FormText>
                <input
                    className="ysink_palette_sinput"
                    type="checkbox"
                    onChange={(e) =>
                        (persist.store.keyBind.shift = e.target.checked)
                    }
                    checked={persist.ghost.keyBind.shift}
                    disabled={state.ghost.pickingBind}
                />

                <FormText className="ysink_palette_slabel">
                    Ctrl / Meta / Cmd ⌘
                </FormText>
                <input
                    className="ysink_palette_sinput"
                    type="checkbox"
                    onChange={(e) =>
                        (persist.store.keyBind.ctrlMeta = e.target.checked)
                    }
                    checked={persist.ghost.keyBind.ctrlMeta}
                    disabled={state.ghost.pickingBind}
                />
            </div>
        </div>
    );
};
