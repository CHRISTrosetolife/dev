import { string_delimit } from "./string_delimit.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function app_learn_code_log_delimit(message) {
  return app_learn_code_log(string_delimit(message));
}
