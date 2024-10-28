import { log_list } from "./log_list.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_todo_command_log(filtered) {
  let mapped = list_map_property(filtered, "name");
  let mapped2 = list_map_index(mapped, (item, index) =>
    string_combine_multiple([index, " ", item]),
  );
  log_list(mapped2);
}
