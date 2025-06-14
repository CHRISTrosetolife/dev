import { app_pray_catholic_bishops_settings } from "./app_pray_catholic_bishops_settings.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { html_button_settings } from "./html_button_settings.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export async function app_pray_catholic_bishops() {
  let fn = app_pray_catholic_bishops;
  let root = html_document_body();
  html_button_settings(root, function () {
    app_pray_catholic_bishops_settings(root);
  });
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(root, fn, ps);
}
