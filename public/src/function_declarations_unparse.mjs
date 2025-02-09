import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { list_wait } from "./list_wait.mjs";
export async function function_declarations_unparse(dependency_names) {
  let ds = list_map(dependency_names, function_declaration);
  let ws = await list_wait(ds);
  let us = list_map(ws, js_unparse);
  return us;
}
