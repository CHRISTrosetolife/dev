import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with(list, prefix) {
  return list_filter(list, (item) => string_starts_with(item, prefix));
}
