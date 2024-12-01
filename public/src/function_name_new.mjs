import { add_1 } from "./add_1.mjs";
import { function_import } from "./function_import.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { global_get } from "./global_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
export async function function_name_new(function_name_base) {
  let j = 1;
  let function_name = function_name_base;
  while (true) {
    try {
      let g = global_get();
      let { files } = g;
      let function_path = function_name_to_path(function_name);
      if (object_property_exists_not(files, function_path)) {
        await function_import(function_name);
      }
      j = add_1(j);
      function_name = string_combine_multiple([
        function_name_base,
        function_name_separator(),
        j,
      ]);
    } catch (e) {
      break;
    }
  }
  return function_name;
}
