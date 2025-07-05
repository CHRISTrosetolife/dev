import { identity } from "./identity.mjs";
import { function_get } from "./function_get.mjs";
export function identity_get() {
  let v = function_get(identity);
  return v;
}
