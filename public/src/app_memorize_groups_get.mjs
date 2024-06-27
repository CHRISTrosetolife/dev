import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
import { string_replace } from "./string_replace.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { list_map } from "./list_map.mjs";
export function app_memorize_groups_get(context, value) {
  let mapped = list_map(context.groups, (g) =>
    app_memorize_group_to_range_string(context, g),
  );
  let mapped2 = list_map(mapped, (m) => string_replace(m, " ", ""));
  let index = list_index(mapped2, value);
  let g = list_get(context.groups, index);
  return g;
}
