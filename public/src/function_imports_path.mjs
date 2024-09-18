import { log } from "./log.mjs";
import { list_any } from "./list_any.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { graph_path_shortest } from "./graph_path_shortest.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
export async function function_imports_path(function_name_from, name_to) {
  let map = await function_imports(function_name_from);
  let vertices = list_adder_unique((la) => {
    each_object(map, (function_name, mapped) => {
      la(function_name);
      let { sources, imports } = mapped;
      each([sources, imports], la);
    });
  });
  return graph_path_shortest(
    vertices,
    (u, v) => {
      if (!object_property_exists(map, u)) {
        return false;
      }
      let mapped = object_property_get(map, u);
      let { sources, imports } = mapped;
      let result = list_any([sources, imports], (i) => list_includes(i, v));
      if (
        u === "js_code_export_function_declare" &&
        v === "function_new_generic"
      ) {
        log({
          result,
        });
      }
      return result;
    },
    function_name_from,
    name_to,
  );
}
