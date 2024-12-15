import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_grocery_main(context) {
  let root = object_property_get(context, "root");
  html_button_width_full_text_click(root, "items", () => {});
}
