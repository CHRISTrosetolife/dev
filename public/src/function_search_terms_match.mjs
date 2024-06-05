import { string_includes_curry } from "./string_includes_curry.mjs";
import { list_all } from "./list_all.mjs";
export function function_search_terms_match(function_name, terms) {
  return list_all(terms, string_includes_curry(function_name));
}
