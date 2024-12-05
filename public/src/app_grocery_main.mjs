import { object_property_get } from "./object_property_get.mjs";
import { json_to } from "./json_to.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_grocery_main(context) {
  let root2 = object_property_get(context, "root");
  html_p_text(root, json_to(object_property_get(context, "index")));
}
