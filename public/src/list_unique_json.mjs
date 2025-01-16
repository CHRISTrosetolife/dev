import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { json_to } from "./json_to.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_unique_json(concise_duplicates) {
  let concise_hash = {};
  let concise = list_adder((la) => {
    each(concise_duplicates, (cd) => {
      let j = json_to(cd);
      if (!object_property_exists(concise_hash, j)) {
        object_property_set(concise_hash, j, cd);
        la(cd);
      }
    });
  });
  return concise;
}
