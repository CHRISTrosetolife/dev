import { list_single } from "./list_single.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_find(list, predicate) {
  let filtered = list_filter(definitions_list, (d) => d.word === w);
  let ds = list_single(filtered).definitions;
}
