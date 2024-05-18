import { string_replace } from "./string_replace.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { import_node } from "./import_node.mjs";
let g = await import_node("glob");
export async function folder_read(folder, file_extension) {
  folder = string_replace(folder, "\\", "/");
  folder += '/';
  let { glob } = g;
  let files = await glob(`${folder}**/*${file_extension}`);
  list_sort_string(files, identity)
  return files;
}
