import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_import } from "./function_import.mjs";
export async function function_definition(language) {
  assert(string_is, [language]);
  return await function_import(
    string_combine_multiple([language, "_definition"]),
  );
}
