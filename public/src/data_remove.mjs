import { object_property_delete } from "./object_property_delete.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function data_remove(data, function_name) {
  let functions = object_property_initialize(data, "functions", {});
  if (object_property_exists(functions, function_name)) {
    object_property_delete(functions, function_name);
  }
  let identifiers = object_property_initialize(data, "identifiers", {});
  each_object(identifiers, (id, id_functions) => {
    list_remove_if_exists(id_functions, function_name);
  });
}
