import { functions_names } from "./functions_names.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
export async function function_paths() {
  let names = await functions_names();
  let paths = list_map(names, function_name_to_path);
  return paths;
}
