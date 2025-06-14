import { app_pray_catholic_bishops_main } from "./app_pray_catholic_bishops_main.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_pray_catholic_bishops_settings } from "./app_pray_catholic_bishops_settings.mjs";
export async function app_pray_catholic_bishops() {
  let body = html_style_default_initialize();
  app_pray_catholic_bishops_settings(body);
  await app_pray_catholic_bishops_main(body);
}
