import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function function_declarations_unparse(dependency_names) {
  let ds = await list_map_async(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  return us;
}
