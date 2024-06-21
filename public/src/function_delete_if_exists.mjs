import { function_exists } from "./function_exists.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_delete_if_exists(function_name) {
  let e = await function_exists(function_name);
  if (e) {
    await function_delete(function_name);
  }
}
