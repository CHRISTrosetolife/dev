import { app_code_refresh_function_selection_removals } from "./app_code_refresh_function_selection_removals.mjs";
import { list_remove_multiple_from } from "./list_remove_multiple_from.mjs";
export function app_code_refresh_function_selection_remove(result) {
  let { ancestor_common, low, high, removed } =
    app_code_refresh_function_selection_removals(result);
  list_remove_multiple_from(ancestor_common, low, high);
  let v2 = removed;
  return v2;
}
