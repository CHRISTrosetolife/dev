import { import_node } from "./import_node.mjs";
let fs = await import_node("fs");
export async function file_empty(file_new_name) {
  await fs.promises.writeFile(file_new_name, "");
}
