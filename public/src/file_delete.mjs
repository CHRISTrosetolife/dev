import { web_is } from "./web_is.mjs";
import { import_node } from "./import_node.mjs";
export async function file_delete(file_name) {
  if (web_is()) {
  }
  let fs = await import_node("fs");
  let v = await fs.promises.rm(file_name);
  return v;
}
