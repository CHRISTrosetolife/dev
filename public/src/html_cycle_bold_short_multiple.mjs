import { html_cycle_bold_short } from "./html_cycle_bold_short.mjs";
export function html_cycle_bold_short_multiple(parent, lines) {
  for (let line of lines) {
    html_cycle_bold_short(parent, line);
  }
}
