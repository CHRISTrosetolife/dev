import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  let results = await functions_identifier(fn_name("function_new_generic"));
  return results;
}
