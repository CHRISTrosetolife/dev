import { html_style_success_if } from "./html_style_success_if.mjs";
import { string_to } from "./string_to.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_weights() {
  let root = html_style_default_initialize();
  each([1, 2, 5, 10, 15, 20, 25, 45, 50], function (value) {
    let selected = false;
    let b = html_button_text_click(root, string_to(value), function () {
      selected = !selected;
      html_style_success_if(b, selected);
    });
  });
}
