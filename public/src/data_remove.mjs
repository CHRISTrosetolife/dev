import { object_property_delete } from "./object_property_delete.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function data_remove(ast, data) {
  let declaration = js_declaration_single(ast);
  let {
    async,
    id: { name },
  } = declaration;
  let functions = object_property_initialize(data, "functions", {});
  if (object_property_exists(functions, name)) {
    object_property_delete(functions, name);
  }
  each_object(identifiers, (id, id_functions) => {
    list_remove_if_exists(id_functions, name);
  });
}
