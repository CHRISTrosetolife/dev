import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
export async function file_overwrite(file_path, data_string) {
  assert(string_is, [data_string]);
  let v = await file_overwrite_generic(file_path, data_string, "utf-8");
  return v;
}
