import { list_includes_not } from "./list_includes_not.mjs";
import { app_learn_code_range_retry } from "./app_learn_code_range_retry.mjs";
export function app_learn_code_unique(value_get, existing) {
  let value2;
  for (let i of app_learn_code_range_retry()) {
    value2 = value_get();
    if (list_includes_not(existing, value2)) {
      break;
    }
  }
  return value2;
}
