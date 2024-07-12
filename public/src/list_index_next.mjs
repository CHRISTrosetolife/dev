import { add_1 } from "./add_1.mjs";
import { list_index } from "./list_index.mjs";
export function list_index_next(chapters, chapter) {
  let chapter_index = list_index(chapters, chapter);
  let chapter_index_next = add_1(chapter_index);
  return chapter_index_next;
}
