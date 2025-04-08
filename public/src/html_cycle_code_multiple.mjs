import { list_denest } from "./list_denest.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function html_cycle_code_multiple(parent, messages) {
  messages = list_denest(messages);
  for (let message of messages) {
    html_cycle_code(parent, message);
  }
}
