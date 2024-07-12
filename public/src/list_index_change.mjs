import { list_index } from "./list_index.mjs";
export function list_index_change(list, item, lambda) {
  let chapter_index = list_index(list, item);
  let chapter_index_next = lambda(chapter_index);
  return chapter_index_next;
}
