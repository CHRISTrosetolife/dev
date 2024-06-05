import { string_includes } from "./string_includes.mjs";
import { list_all } from "./list_all.mjs";
export function function_search_terms_match(function_name, terms) {
  list_all(terms, (term) => string_includes(function_name, term));
}
