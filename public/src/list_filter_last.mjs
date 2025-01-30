import { list_last } from "./list_last.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_last(factors, lamda) {
  let filtered = list_filter(factors, lamda);
  let factor = list_last(filtered);
  return factor;
}
