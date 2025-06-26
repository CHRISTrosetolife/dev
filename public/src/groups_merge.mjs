import { object_merge_list } from "./object_merge_list.mjs";
import { each } from "./each.mjs";
export function groups_merge(mapped) {
  let merged = {};
  each(mapped, function (group) {
    object_merge_list(group, merged);
  });
  return merged;
}
