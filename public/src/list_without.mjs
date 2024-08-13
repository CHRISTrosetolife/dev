import { list_without_by } from "./list_without_by.mjs";
import { identity } from "./identity.mjs";
export function list_without(list, item) {
  return list_without_by(list, item, identity);
}
