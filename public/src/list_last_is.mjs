import { list_index_last } from "./list_index_last.mjs";
import { list_index } from "./list_index.mjs";
export function list_last_is(verses, verse) {
  return list_index(verses, verse) === list_index_last(verses);
}
