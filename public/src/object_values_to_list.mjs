import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
export function object_values_to_list(filtered) {
  return list_adder(function (la) {
    each_object(filtered, function (key, value) {
      la(value);
    });
  });
}
