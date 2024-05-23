import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with(mapped5, prefix_1) {
  return list_filter(mapped5, (m) => string_starts_with(m, prefix_1));
}
