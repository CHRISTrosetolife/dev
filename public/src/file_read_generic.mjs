import { import_node } from "./import_node.mjs";
export async function file_read_generic(file_name, encoding) {
  let fs = await import_node("fs");
  return await fs.promises.readFile(file_name, encoding);
}
