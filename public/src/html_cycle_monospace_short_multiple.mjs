import { html_cycle_monospace_short } from "./html_cycle_monospace_short.mjs";
export function html_cycle_monospace_short_multiple(parent, messages) {
  for (let message of messages) {
    html_cycle_monospace_short(parent, message);
  }
}
