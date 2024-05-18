import { string_replace } from "./string_replace.mjs";
import { import_node } from "./import_node.mjs";
let g = await import_node("glob");
export async function folder_read(folder, file_extension) {
  folder = string_replace(folder, "\\", "/");
  let { glob } = g;
  let files = await glob(`${folder}**/*${file_extension}`);
  return files;
}
