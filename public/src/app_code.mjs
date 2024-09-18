import { html_clear } from "./html_clear.mjs";
import { list_take } from "./list_take.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each } from "./each.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { function_names } from "./function_names.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_div } from "./html_div.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let ns = await function_run_remote(function_names.name, []);
  let input = html_input_width_full_focus(root);
  let results = html_div(root);
  html_on_keydown(input, () => {
    html_clear(results);
    let filtered = list_filter(ns, (n) => {});
    let taken = list_take(filtered, 50);
    each(taken, (item) => {
      html_div_text(results, item);
    });
  });
}
