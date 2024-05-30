import { list_get_or_generic } from "./list_get_or_generic.mjs";
export function list_get_or(list, index, default_value) {
  return list_get_or_generic(() => default_value, list, index);
}
