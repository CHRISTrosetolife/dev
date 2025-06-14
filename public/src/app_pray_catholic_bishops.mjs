import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_pray_catholic_bishops_settings } from "./app_pray_catholic_bishops_settings.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { html_button_settings } from "./html_button_settings.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export async function app_pray_catholic_bishops() {
  let body = html_style_default_initialize();
  let fn = app_pray_catholic_bishops;
  html_button_settings(body, function () {
    app_pray_catholic_bishops_settings(body);
  });
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(body, fn, ps);
}
