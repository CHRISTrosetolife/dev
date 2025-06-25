import { assert } from "./assert.mjs";
import { folder_read_generic } from "./folder_read_generic.mjs";
import { string_is } from "./string_is.mjs";
export async function folder_read(folder, file_extension) {
  assert(string_is, [file_extension]);
  let recursive = true;
  let files = await folder_read_generic(folder, [file_extension], recursive);
  return files;
}
