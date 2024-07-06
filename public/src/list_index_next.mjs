import { list_index } from "./list_index.mjs";
export function list_index_next(chapters, chapter) {
  let chapter_index = list_index(chapters, chapter);
  let chapter_index_next = chapter_index + 1;
  return chapter_index_next;
}
