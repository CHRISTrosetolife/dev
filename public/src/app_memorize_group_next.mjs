import { list_index_json } from "./list_index_json.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { list_size } from "./list_size.mjs";
export function app_memorize_group_next(context) {
  let { groups } = context;
  let group_current_index = list_index_json(groups, context.save.group_current);
  let group_next_index = add_1(group_current_index);
  if (group_next_index >= list_size(groups)) {
    return null;
  }
  let group_next = list_get(groups, group_next_index);
  return group_next;
}
