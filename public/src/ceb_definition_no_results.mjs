import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function ceb_definition_no_results(children) {
  let filtered9 = list_filter_property(children, "type", "text");
  let texts = list_map_property(filtered9, "data");
  let no_results = list_includes(
    texts,
    "No results found for the Cebuano word ",
  );
  return no_results;
}
