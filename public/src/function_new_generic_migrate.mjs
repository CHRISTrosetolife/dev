import { function_new_generic } from "./function_new_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  await functions_identifier(fn_name(function_new_generic));
}
