import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_progress_style_update } from "./html_progress_style_update.mjs";
import { html_progress_index_set } from "./html_progress_index_set.mjs";
export function html_progress_index_update(result, count) {
  assert_arguments_length(arguments, 2);
  html_progress_index_set(result, count);
  html_progress_style_update(result);
}
