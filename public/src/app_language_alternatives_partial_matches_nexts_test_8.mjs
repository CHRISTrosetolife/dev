import { app_language_alternatives_partial_matches_nexts } from "./app_language_alternatives_partial_matches_nexts.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
export function app_language_alternatives_partial_matches_nexts_test_8() {
  let result = app_language_alternatives_partial_matches_nexts("from", 2, 2, [
    "fur",
    "form",
    "front",
    "at",
    "fromi",
  ]);
  assert_boolean(equal_json(result, ["i"]));
}
