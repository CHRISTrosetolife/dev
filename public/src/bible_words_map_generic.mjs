import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export function bible_words_map_generic(lambda, all, symbols) {
  all = list_map(all, (a) => lambda(a, symbols));
  all = list_map(all, string_case_lower);
  all = list_filter(all, string_empty_not_is);
  return all;
}
