import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function url_secure_w3() {
  assert_arguments_length(arguments, 0);
  return string_combine(url_secure(), "www.");
}
