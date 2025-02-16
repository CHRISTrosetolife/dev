import { list_is } from "./list_is.mjs";
import { folder_path_slash_forward } from "./folder_path_slash_forward.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { folder_is } from "./folder_is.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { identity } from "./identity.mjs";
import { assert } from "./assert.mjs";
import { import_node } from "./import_node.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export async function folder_read_generic(folder, file_extensions, recursive) {
  let fs = await import_node("fs");
  let path = await import_node("path");
  assert(list_is, [file_extension]);
  folder = folder_path_slash_forward(folder);
  folder += "/";
  async function traverse(dir, lambda_each) {
    let files = await fs.promises.readdir(dir);
    await each_async(files, async function (file) {
      let path_full = path.join(dir, file);
      if (recursive) {
        if (await folder_is(path_full)) {
          await traverse(path_full, lambda_each);
        }
      }
      if (string_ends_with(path_full, file_extension)) {
        lambda_each(path_full);
      }
    });
  }
  let files = await list_adder_async(async function (la) {
    await traverse(folder, la);
  });
  list_sort_string_map(files, identity);
  return files;
}
