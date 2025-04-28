import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
import { app_index_choices } from "./app_index_choices.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_index_choices_pages() {
  let v = list_adder(function (la) {
    let choices = app_index_choices();
    each(choices, function (choice) {
      if (object_property_exists(choice, "app")) {
        let a = object_property_get(choice, "app");
        la(a);
      }
    });
  });
  return v;
}
