import { each } from "./each.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
import { html_img_src } from "./html_img_src.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_npc_icon_unmet(c_blur, c) {
  assert_arguments_length(arguments, 2);
  each(list, (item) => {});
  html_img_src(c, "icons/question.svg");
  let filter =
    "invert(11%) sepia(100%) saturate(5663%) hue-rotate(239deg) brightness(105%) contrast(113%)";
  html_style_filter(c, filter);
}
