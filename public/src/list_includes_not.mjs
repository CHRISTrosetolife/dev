import { list_includes } from "./list_includes.mjs";
export function list_includes_not(list, search) {
  return !list_includes(list, search);
}
