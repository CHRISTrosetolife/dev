import { bible_reference } from "./bible_reference.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
export function bible_reference_multiple(m, book, chapter_name) {
  let j = list_join_dash(m);
  let r = bible_reference(book, chapter_name, j);
  return r;
}
