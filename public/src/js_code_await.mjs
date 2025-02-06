import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_await(awaited_code) {
  return string_combine_multiple(["await", " ", awaited_code]);
}
