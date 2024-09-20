import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each } from "./each.mjs";
export function html_list(root, list) {
  assert_arguments_length(arguments, 2);
  each(list, (item) => {
    html_div_text(root, item);
  });
}
