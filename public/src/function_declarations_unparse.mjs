import { todo } from "./todo.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { file_read } from "./file_read.mjs";
export async function function_declarations_unparse(dependency_names) {
  todo(
    "maybe this should instead use ",
    file_read,
    "to return the file contents?",
  );
  let ds = await list_map_unordered(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  return us;
}
