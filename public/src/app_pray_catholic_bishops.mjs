import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray_catholic_bishops() {
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
   app_pray_generic(app_pray2, ps);
}
