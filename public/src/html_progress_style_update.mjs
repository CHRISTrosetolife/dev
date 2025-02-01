import { html_style_success_background } from "./html_style_success_background.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style } from "./html_style.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_progress_style_update(result) {
  let progress_percent =
    (object_property_get(result, "index") /
      object_property_get(result, "count")) *
    100;
  html_style(object_property_get(result, "button"), {
    background: string_combine_multiple([
      "linear-gradient(90deg, ",
      html_style_success_background(),
      " ",
      progress_percent,
      "%, white ",
      progress_percent,
      "%)",
    ]),
  });
}
