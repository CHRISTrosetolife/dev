import { prayers_list } from "./prayers_list.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function html_prayer(root, prayer) {
  let pl = prayers_list(prayer);
  html_p_text_multiple(root, pl);
}
