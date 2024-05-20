import { js_code_array } from "./js_code_array.mjs";
export function js_code_array_get(a, index) {
  return `${a}${js_code_array([index])}`;
}
