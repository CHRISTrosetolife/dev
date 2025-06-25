import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { folder_read_generic } from "./folder_read_generic.mjs";
export async function folder_read(folder, file_extension) {
  assert(never, []);
  let recursive = true;
  let files = await folder_read_generic(folder, [file_extension], recursive);
  return files;
}
