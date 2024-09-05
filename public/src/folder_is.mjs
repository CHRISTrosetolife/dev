import { import_node } from "./import_node.mjs";
export async function folder_is(path_full) {
  let fs = await import_node("fs");
  let stat = await fs.promises.lstat(path_full);
  let path_folder_is = stat.isDirectory();
  return path_folder_is;
}
