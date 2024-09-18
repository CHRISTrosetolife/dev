import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let dependency_names = object_properties(map);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  return {
    dependency_names,
    externals,
  };
}
