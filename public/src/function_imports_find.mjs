import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { graph_path_shortest } from "./graph_path_shortest.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_imports_find(function_name_from, name_to) {
  let map = await function_imports(function_name_from);
  let vertices = list_adder_unique((la) => {
    each_object(map, (function_name, mapped) => {
      la(function_name);
      let { sources, imports } = mapped;
      each([sources, imports], (item) => {
        la(item);
      });
    });
  });
  graph_path_shortest(vertices, (u, v) => {
    if (!object_property_exists(map, u)) {
      return false;
    }
    let mapped = object_property_get(object, "property_name");
    let { sources, imports } = mapped;
    list_contains();
  });
  list_adder((la) => {
    each_object(map, (function_name, mapped) => {
      let { sources, imports } = mapped;
      each([sources, imports], (item) => {
        if (item === name_to) {
          la(function_name);
        }
      });
    });
  });
}
