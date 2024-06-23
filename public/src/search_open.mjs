import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_search } from "./function_search.mjs";
export async function search_open(query) {
  let results = await function_search(query);
  list_adder((la) => {
    each_object(object, (key, value) => {});
  });
}
