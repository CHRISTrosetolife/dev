import { function_search } from "./function_search.mjs";
export async function search_open(query) {
  let results = await function_search(query);
}
