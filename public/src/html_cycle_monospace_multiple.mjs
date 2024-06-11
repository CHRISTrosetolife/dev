import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
export function html_cycle_monospace_multiple(parent, messages) {
  for (let message of messages) {
    html_cycle_monospace(parent, message);
  }
}
