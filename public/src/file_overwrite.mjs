import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
export async function file_overwrite(file_name, data) {
  assert(string_is, [data]);
  return await file_overwrite_generic(file_name, data, "utf-8");
}
