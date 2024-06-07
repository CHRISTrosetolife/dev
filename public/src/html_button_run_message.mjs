import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_button_run_message(message) {
  let list = ["💻 run", message];
  return string_combine_multiple(list);
}
