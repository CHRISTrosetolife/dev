import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
import { app_index_choices } from "./app_index_choices.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_index_choices_pages() {
  return list_adder((la) => {
    let choices = app_index_choices();
    each(choices, (choice) => {
      if (object_property_exists(choice, "page")) {
        let page = object_property_get(choice, "page");
        la(string_combine_multiple([app_prefix(), page]));
      }
    });
  });
}
