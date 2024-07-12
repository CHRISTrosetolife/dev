import { list_get } from "./list_get.mjs";
import { list_index_next } from "./list_index_next.mjs";
export function list_next(list, item) {
  let item_index_next = list_index_next(list, item);
  let tem_next = list_get(list, chapter_index_next);
  return item_next;
}
