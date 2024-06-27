import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { list_index } from "./list_index.mjs";
export function app_memorize_group_next(context) {
  let group_current_index = list_index(context.groups, context.group_current);
  let group_next_index = add_1(group_current_index);
  let group_next = list_get(context.groups, group_next_index);
  return group_next;
}
