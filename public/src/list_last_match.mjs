import { list_get } from "./list_get.mjs";
import { list_all } from "./list_all.mjs";
import { each_index } from "./each_index.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
export function list_last_match(lists) {
  let fr = list_first_remaining(lists);
  let first = object_property_get(fr, "first");
  let remaining = object_property_get(fr, "remaining");
  let last_matching_index = null;
  each_index(first, function (item, index) {
    let all_match = list_all(remaining, function (r) {
      let item2 = list_get(r, index);
      let v2 = item2 === item;
      return v2;
    });
    if (all_match) {
      last_matching_index = index;
    } else {
      let v3 = true;
      return v3;
    }
  });
  let last_matching_item;
  if (last_matching_index !== null) {
    last_matching_item = list_get(first, last_matching_index);
  } else {
    last_matching_item = null;
  }
  return last_matching_item;
}
