// patches an issue that occurs with styling when using the Diskai theme

import { findByProps } from "@cumcord/modules/webpack";

const { root } = findByProps("innerPadding");

export default () => (
  <style>{`.ysink_palette_modal.${root}{background:none!important;}`}</style>
);
