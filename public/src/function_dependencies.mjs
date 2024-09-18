import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  list_adder_unique((la) => {
    each_object(map, (function_name, m) => {
      let { sources, imports } = m;
    });
  });
}
