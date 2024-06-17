import { import_node } from "./import_node.mjs";
export async function folder_new(folder_new_name) {
  let fs = await import_node("fs");
  await fs.promises.mkdir(folder_new_name);
}
