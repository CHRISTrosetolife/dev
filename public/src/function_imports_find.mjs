import { list_adder_unique } from "./list_adder_unique.mjs";
import { graph_path_shortest } from "./graph_path_shortest.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_imports_find(function_name_from, name_to) {
  let map = await function_imports(function_name_from);
  graph_path_shortest();
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
  let vertices = list_adder_unique((la) => {
    each_object(map, (function_name, mapped) => {
      la(function_name);
      let { sources, imports } = mapped;
      each([sources, imports], (item) => {
        la(item);
      });
    });
  });
}
