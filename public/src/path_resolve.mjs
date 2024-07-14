import path from "path";
import { import_node } from "./import_node.mjs";
export async function path_resolve(file_path) {
  await import_node("path");
  return path.resolve(file_path);
}
