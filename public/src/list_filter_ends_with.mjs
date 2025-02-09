import { string_ends_with } from "./string_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_ends_with(file_paths, suffix) {
  return list_filter(file_paths, (p) => string_ends_with(p, suffix));
}
