import { list_add } from "./list_add.mjs";
import { list_clear } from "./list_clear.mjs";
export function list_replace_single(params, p) {
  list_clear(params);
  list_add(p);
}
