import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_button_settings } from "./html_button_settings.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_pray_catholic_bishops() {
  let root = html_document_body();
  html_button_settings(root, function () {
    html_clear_scroll_top(root);
    let t = html_textarea_width_full(root);
  });
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(app_pray_catholic_bishops, ps);
}
