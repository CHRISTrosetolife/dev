import { list_first } from "./list_first.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function list_index_ensure(verses, verse_index) {
  if (!list_index_is(verses, verse_index)) {
    verse_index = list_first(verses);
  }
  return verse_index;
}
