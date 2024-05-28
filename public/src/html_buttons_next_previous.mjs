import { html_button_disable } from "./html_button_disable.mjs";
import { log } from "./log.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { equal } from "./equal.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { html_button_width_full_text_click_previous } from "./html_button_width_full_text_click_previous.mjs";
import { add_1 } from "./add_1.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_hr } from "./html_hr.mjs";
export function html_buttons_next_previous(root, on_click, index, index_last) {
  html_hr(root);
  let button_next = html_button_width_full_text_click_next(
    root,
    async function next_on_click() {
      await on_click(add_1(index));
    },
  );
  let button_previous = html_button_width_full_text_click_previous(
    root,
    async function previous_on_click() {
      await on_click(subtract_1(index));
    },
  );
  if (equal(index, 0)) {
    html_button_disable(button_previous);
    log("prev dis");
  }
  if (equal(index, index_last)) {
    html_button_disable(button_previous);
    log("next dis");
  }
  html_spacer_vertical_2(root);
}
