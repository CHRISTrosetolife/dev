import { function_new_generic } from "./function_new_generic.mjs";
export async function function_new_constant_string(f_name, value) {
  let open = true;
  await function_new_generic(f_name, "", "", open, [], false, false);
}
