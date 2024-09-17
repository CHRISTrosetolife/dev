import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
import { app_index_choices } from "./app_index_choices.mjs";
export function app_index_choices_files() {
  return list_adder((la) => {
    let choices = app_index_choices();
    each(choices, (choice) => {
      if (object_property_exists(choice, "page")) {
        let page = object_property_get(choice, "page");
        la("app_" + page);
      }
    });
  });
}
