import { js_keyword_await } from "./js_keyword_await.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_await(awaited_code) {
  return string_combine_multiple([js_keyword_await(), " ", awaited_code]);
}
