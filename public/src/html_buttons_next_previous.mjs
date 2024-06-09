import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_buttons_next_previous_hr_none } from "./html_buttons_next_previous_hr_none.mjs";
import { html_hr } from "./html_hr.mjs";
export function html_buttons_next_previous(root, on_click, index, index_last) {
  html_hr(root);
  html_buttons_next_previous_hr_none(root, on_click, index, index_last);
  html_spacer_vertical_2(root);
}
