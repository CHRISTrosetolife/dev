import { regex_test } from "./regex_test.mjs";
export function string_digit_is(s) {
  let regex = /^\d+$/;
  return regex_test(regex, s);
}
