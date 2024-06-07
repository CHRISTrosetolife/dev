import { list_add } from "./list_add.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function html_button_run_message(message) {
  let list = ["💻 run"];
  if (string_empty_not_is(message)) {
    list_add(list, " ");
    list_add(list, message);
  }
  return string_combine_multiple(list);
}
