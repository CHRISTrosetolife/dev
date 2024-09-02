import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { import_node } from "./import_node.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export async function folder_read_generic(folder, file_extension, recursive) {
  let fs = await import_node("fs");
  let path = await import_node("path");
  assert(string_is, [file_extension]);
  folder = string_replace(folder, "\\", "/");
  folder += "/";
  async function traverse(dir, lambda_each) {
    let files = await fs.promises.readdir(dir);
    await each_async(files, async (file) => {
      let path_full = path.join(dir, file);
      if (recursive) {
        let stat = await fs.promises.lstat(path_full);
        if (stat.isDirectory()) {
          await traverse(path_full, lambda_each);
        }
      }
      if (string_ends_with(path_full, file_extension)) {
        lambda_each(path_full);
      }
    });
  }
  let files = await list_adder_async(async (la) => {
    await traverse(folder, la);
  });
  list_sort_string(files, identity);
  return files;
}
