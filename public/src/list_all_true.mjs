import { identity } from "./identity.mjs";
import { list_all } from "./list_all.mjs";
export function list_all_true(mapped) {
  return list_all(mapped, identity);
}
