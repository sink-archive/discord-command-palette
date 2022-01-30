import { state } from "@cumcord/pluginData";
import entries from "../paletteEntries";

import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";
import { ErrorBoundary } from "@cumcord/ui/components";
import DiskaiShim from "./DiskaiShim";

const { openModal } = findByProps("openModalLazy");
const ModalComponents = findByProps("ModalCloseButton");
const Header = findByProps("Sizes", "Tags");
const FormText = findByDisplayName("FormText");

import logo from "../../assets/icon.svg";

const Component = ({ e }) => (
  <ErrorBoundary>
    <DiskaiShim />
    <ModalComponents.ModalRoot
      transitionState={e.transitionState}
      size="small"
      className="ysink_palette_modal"
    >
      <ModalComponents.ModalContent className="ysink_palette_palette">
        <div className="ysink_palette_aboutcontainer">
          <img src={logo} className="ysink_palette_abouticon" />
          <div className="ysink_palette_right_pane">
            <Header tag="h2" size={Header.Sizes.SIZE_20}>
              Discord Command Palette
            </Header>
            <FormText className="ysink_palette_warntext">
              ⚠ This is pre-release software, expect bugs! ⚠
            </FormText>

            <FormText className="ysink_palette_entrycount">
              {entries.length} built in entries loaded
            </FormText>
            <FormText className="ysink_palette_entrycount">
              {state.ghost.customEntries.length} custom entries registered
            </FormText>
          </div>
        </div>
      </ModalComponents.ModalContent>
    </ModalComponents.ModalRoot>
  </ErrorBoundary>
);

export default () => openModal((e) => <Component e={e} />);
