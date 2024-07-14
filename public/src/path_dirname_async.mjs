import { import_node } from "./import_node.mjs";
export async function path_dirname_async(file_path) {
  let path = await import_node("path");
  return path.dirname(file_path);
}
