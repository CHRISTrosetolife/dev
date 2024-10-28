import { app_todo_command_items } from "./app_todo_command_items.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { log_list } from "./log_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function app_todo_command() {
  let { filtered } = await app_todo_command_items();
  let mapped = list_map_property(filtered, "name");
  let mapped2 = list_map_index(mapped, (item, index) =>
    string_combine_multiple([index, " ", item]),
  );
  log_list(mapped2);
}
