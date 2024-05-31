import { string_combine } from "./string_combine.mjs";
import { add_1 } from "./add_1.mjs";
import { function_import } from "./function_import.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { global_get } from "./global_get.mjs";
export async function funcion_name_new(function_name_base) {
  let j = 1;
  let function_name;
  while (true) {
    try {
      let g = global_get();
      let { files } = g;
      let function_path = function_name_to_path(function_name);
      if (object_property_exists_not(files, function_path)) {
        await function_import(function_name);
      }
      j = add_1(j);
      function_name = string_combine(function_name_base, j);
    } catch (e) {
      break;
    }
  }
  return function_name;
}
