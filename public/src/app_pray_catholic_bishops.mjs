import { html_on_input_value } from "./html_on_input_value.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_button_settings } from "./html_button_settings.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_span_text } from "./html_span_text.mjs";
export async function app_pray_catholic_bishops() {
  let fn = app_pray_catholic_bishops;
  let root = html_document_body();
  html_button_settings(root, function () {
    html_clear_scroll_top(root);
    let key = "name_each_before";
    html_span_text(root, "Text to display before each name");
    let t = html_textarea_width_full(root);
    let name_each_before = storage_local_initialize(fn, key, prayers_sabbw(""));
    html_value_set(t, name_each_before);
    html_on_input_value(t, function (value_new) {});
  });
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(fn, ps);
}
