import { html_inner_set } from "./html_inner_set.mjs";
import { app_learn_code_style_code_error } from "./app_learn_code_style_code_error.mjs";
import { error } from "./error.mjs";
import { app_learn_code_code_background_set } from "./app_learn_code_code_background_set.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_dev_sandbox_result(root) {
  let result_component = app_learn_code_code_part_contrast(root, "");
  html_style_display_none(result_component);
  object_merge(result_component, {
    show: function () {
      html_style_display_block(result_component);
      app_learn_code_code_background_set(result_component);
    },
    error: function (message) {
      app_learn_code_style_code_error(result_component);
      html_inner_set(result_component, message);
    },
    text_set: function (text) {
      html_inner_set(result_component, text);
    },
  });
  return result_component;
}
