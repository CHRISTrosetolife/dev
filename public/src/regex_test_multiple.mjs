import { regex_test } from "./regex_test.mjs";
import { list_all } from "./list_all.mjs";
export function regex_test_multiple(regexes, m) {
  return list_all(regexes, (r) => regex_test(r, m));
}
