import { list_clear } from "./list_clear.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { each_index } from "./each_index.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export function app_contact_respond_choice(tokens, offset, outputs, choice) {
  let choice_tokens = object_property_get(choice, "tokens");
  let choice_response = object_property_get(choice, "response");
  let choice_valid = object_property_get_or(choice, "valid", true);
  let match = true;
  let offset_next = null;
  each_index(choice_tokens, function (item, index) {
    item = string_case_lower(item);
    let ti = offset + index;
    if (list_index_is(tokens, ti)) {
      let current = list_get(tokens, ti);
      if (item === current) {
        offset_next = index + 1;
      } else {
        match = false;
      }
    } else {
      match = false;
    }
  });
  if (match) {
    if (choice_valid) {
      offset += offset_next;
    } else {
      list_clear(outputs);
    }
    list_add(outputs, choice_response);
  }
  let v = {
    offset,
    choice_valid,
  };
  return v;
}
