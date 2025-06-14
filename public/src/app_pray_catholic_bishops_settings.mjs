import { html_input_width_full_placeholder_storage_local } from "./html_input_width_full_placeholder_storage_local.mjs";
import { html_textarea_width_full_placeholder_storage_local } from "./html_textarea_width_full_placeholder_storage_local.mjs";
import { app_pray_catholic_bishops_main } from "./app_pray_catholic_bishops_main.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_pray_catholic_bishops } from "./app_pray_catholic_bishops.mjs";
import { html_button_back } from "./html_button_back.mjs";
export function app_pray_catholic_bishops_settings(root) {
  let fn = app_pray_catholic_bishops;
  html_clear_scroll_top(root);
  html_button_back(root, async function () {
    let v = await app_pray_catholic_bishops_main(root);
    return v;
  });
  html_input_width_full_placeholder_storage_local(
    fn,
    root,
    "group_count",
    "The number of names to pray together as a group",
    "10",
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_each_before",
    "Text to display before each name",
    prayers_sabbw(""),
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_each_after",
    "Text to display after each name",
    "",
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_first_before",
    "Text to display before the first name of each group",
    "",
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_first_after",
    "Text to display after the first name of each group",
    "",
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_last_before",
    "Text to display before the last name of each group",
    "",
  );
  html_textarea_width_full_placeholder_storage_local(
    fn,
    root,
    "name_last_after",
    "Text to display after the last name of each group",
    " and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry",
  );
}
