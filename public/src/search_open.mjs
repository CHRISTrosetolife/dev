import { list_sort } from "./list_sort.mjs";
import { function_search } from "./function_search.mjs";
import { object_properties } from "./object_properties.mjs";
export async function search_open(query) {
  let results = await function_search(query);
  let properties = object_properties(results);
  let first = list_sort(properties, string_size);
  return results;
}
