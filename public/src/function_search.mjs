import { each } from "./each.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { function_names } from "./function_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_search_terms_match } from "./function_search_terms_match.mjs";
export async function function_search(query) {
  let terms = string_split_comma(query);
  let fn_names = await function_names();
  let matches = list_filter(fn_names, (fn_name) => {
    return function_search_terms_match(fn_name, terms);
  });
  let result = {};
  each(matches, m);
  return matches;
}
