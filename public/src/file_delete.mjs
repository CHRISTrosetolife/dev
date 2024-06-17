import { import_node } from "./import_node.mjs";
export async function file_delete(file_name) {
  let fs = await import_node("fs");
  return await fs.promises.rm(file_name);
}
