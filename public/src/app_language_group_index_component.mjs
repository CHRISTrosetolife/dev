import { add_1 } from "./add_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_group_index_get } from "./app_language_group_index_get.mjs";
export function app_language_group_index_component(context) {
  let { root } = context;
  let group_index = app_language_group_index_get(context);
  html_p_text(root, string_combine_multiple(["group ", add_1(group_index)]));
}
