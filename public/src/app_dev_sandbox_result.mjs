import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_dev_sandbox_result(root) {
  let result_component = app_learn_code_code_part_contrast(root, "");
  html_style_display_none(result_component);
  object_merge(result_component, {
    show: () => html_style_display_block(result_component),
  });
  return result_component;
}
