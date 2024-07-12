import { add_1 } from "./add_1.mjs";
import { list_index } from "./list_index.mjs";
export function list_index_next(chapters, chapter) {
  let lambda = add_1;
  let chapter_index = list_index(chapters, chapter);
  let chapter_index_next = lambda(chapter_index);
  return chapter_index_next;
}
