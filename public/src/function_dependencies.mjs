import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let vertices = list_adder_unique((la) => {
    each_object(map, (function_name, mapped) => {
      let { sources, imports } = mapped;
      each([function_name, sources, imports], la);
    });
  });
}
