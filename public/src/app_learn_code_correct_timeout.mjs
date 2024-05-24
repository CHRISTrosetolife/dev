import { app_learn_code_ms_correct } from "./app_learn_code_ms_correct.mjs";
import { timeout_set } from "./timeout_set.mjs";
export function app_learn_code_correct_timeout(lambda) {
  timeout_set(lambda, app_learn_code_ms_correct());
}
