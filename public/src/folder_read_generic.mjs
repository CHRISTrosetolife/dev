import { list_adder_async } from "./list_adder_async.mjs";
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
  async function traverse(dir, lambda_each) {
    let files = fs.readdir(dir);
    await each_async(files, async (file) => {
      let path_full = path.join(dir, file);
      let stat = await fs.lstat(path_full);
      if (stat.isDirectory()) {
        traverse(path_full);
      }
      lambda_each(path_full);
    });
  }
  await list_adder_async(async (la) => {
    traverse(folder, la);
  });
  let { glob } = g;
  let files = await glob(
    string_combine_multiple([folder, recursive ? "**/*" : "", file_extension]),
  );
  list_sort_string(files, identity);
  return files;
}
