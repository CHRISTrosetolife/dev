import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray_catholic_bishops_not() {
  let names = catholic_bishops_not();
  let ps = catholic_bishops_prayers(names);
   app_pray_generic(app_pray_catholic_bishops, ps);
}
