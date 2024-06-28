import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
import { list_index } from "./list_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_last } from "./list_last.mjs";
export function app_memorize_group_next_skip(memorize_context, group_next) {
  let gn_last = list_last(group_next);
  let { verses } = memorize_context;
  let v = list_get(verses, gn_last);
  let gv_index = list_index(verses, v);
  let v_index_next = gv_index + 1;
  let v_next = list_get(verses, v_index_next);
  let { verse_number } = v_next;
  let g = app_memorize_groups_get(memorize_context, verse_number);
  return g;
}
