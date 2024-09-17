import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_imports_find(function_name_from, name_to) {
  let map = await function_imports(function_name_from);
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
