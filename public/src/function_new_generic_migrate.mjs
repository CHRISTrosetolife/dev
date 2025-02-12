import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  let f_name = fn_name("function_new_generic");
  let results = await functions_identifier(f_name);
  $eoa;
  return results;
}
