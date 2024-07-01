import { import_node } from "./import_node.mjs";
export async function file_read_binary(file_name) {
  let fs = await import_node("fs");
  let buffer = await fs.promises.readFile(file_name);
  return buffer;
}
