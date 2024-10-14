import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_import } from "./function_import.mjs";
export async function function_definition(language) {
  return await function_import(
    string_combine_multiple([language, "_definition"]),
  );
}
