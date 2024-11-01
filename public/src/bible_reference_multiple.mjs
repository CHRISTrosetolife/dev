import { bible_reference } from "./bible_reference.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
export function bible_reference_multiple(book, chapter_name, m) {
  let j = list_join_dash(m);
  let r = bible_reference(book, chapter_name, j);
  return r;
}
