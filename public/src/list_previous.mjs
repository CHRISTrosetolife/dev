import { list_get } from "./list_get.mjs";
import { list_index_previous } from "./list_index_previous.mjs";
export function list_previous(verses, verse) {
  let verse_index_previous = list_index_previous(verses, verse);
  let verse_previous = list_get(verses, verse_index_previous);
  return verse_previous;
}
