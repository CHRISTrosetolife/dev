import { import_node } from "./import_node.mjs";
export async function path_resolve(file_path) {
  let path = await import_node("path");
  return path.resolve(file_path);
}
