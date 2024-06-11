import { html_cycle_bold } from "./html_cycle_bold.mjs";
export function html_cycle_bold_multiple(parent, lines) {
  for (let line of lines) {
    html_cycle_bold(parent, line);
  }
}
