import { app_language_answer_partial } from "./app_language_answer_partial.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
export function app_language_answer_partial_test_6() {
  let result = app_language_answer_partial("from", 2, 0);
  assert_boolean(equal_json(result, ""));
}
