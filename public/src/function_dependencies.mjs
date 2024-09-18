import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let dependency_names = list_adder_unique((la) => {
    each_object(map, (function_name, mapped) => {
      let { sources, imports } = mapped;
      assert(list_empty_is, [sources]);
      each([function_name, imports], la);
    });
  });
}
