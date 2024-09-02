import { each_async } from "./each_async.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { import_node } from "./import_node.mjs";
export async function folder_read_generic(folder, file_extension, recursive) {
  let g = await import_node("glob");
  let fs = await import_node("fs");
  let path = await import_node("path");
  assert(string_is, [file_extension]);
  folder = string_replace(folder, "\\", "/");
  folder += "/";
  async function traverseDir(dir, lambda_each) {
    let files = fs.readdir(dir);
    await each_async(files, async (file) => {
      let fullPath = path.join(dir, file);
      let newLocal = await fs.lstat(fullPath);
      if (newLocal.isDirectory()) {
        traverseDir(fullPath);
      }
      lambda_each(fullPath);
    });
  }
  let { glob } = g;
  let files = await glob(
    string_combine_multiple([folder, recursive ? "**/*" : "", file_extension]),
  );
  list_sort_string(files, identity);
  return files;
}
