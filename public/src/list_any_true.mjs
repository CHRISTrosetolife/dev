import { identity } from "./identity.mjs";
import { list_any } from "./list_any.mjs";
export function list_any_true(m) {
  return list_any(m, identity);
}
