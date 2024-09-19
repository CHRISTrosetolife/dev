import { list_empty_is } from "./list_empty_is.mjs";
import { html_button_width_full } from "./html_button_width_full.mjs";
import { string_get } from "./string_get.mjs";
import { each_index } from "./each_index.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { string_regex_match } from "./string_regex_match.mjs";
import { list_join } from "./list_join.mjs";
import { html_clear } from "./html_clear.mjs";
import { each } from "./each.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { function_names } from "./function_names.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_div } from "./html_div.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let ns = await function_run_remote(function_names.name, []);
  let input = html_input_width_full_focus(root);
  let results = html_div(root);
  html_on_input_value(input, (v) => {
    html_clear(results);
    let letters = string_split_empty(v);
    let joined = list_join(letters, ".*");
    let filtered;
    if (list_empty_is(letters)) {
    } else {
    }
    filtered = list_filter(ns, (n) => {
      return string_regex_match(n, joined);
    });
    let taken = list_take_soft(filtered, 50);
    each(taken, (item) => {
      let d = html_button_width_full(results);
      let letters_index = 0;
      each_index(item, (c, i) => {
        if (c === string_get(letters, letters_index)) {
        }
      });
      html_inner_set(d, item);
    });
  });
}
