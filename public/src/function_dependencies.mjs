import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let dependency_names = object_properties(map);
  let vertices = list_adder_unique((la) => {
    each_object_values(map, (function_name, mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  return dependency_names;
}
