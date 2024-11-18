import { html_button_next } from "./html_button_next.mjs";
import { html_button_disable } from "./html_button_disable.mjs";
import { equal } from "./equal.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { html_button_width_full_text_click_previous } from "./html_button_width_full_text_click_previous.mjs";
import { add_1 } from "./add_1.mjs";
export function html_buttons_next_previous_hr_none(
  root,
  on_click,
  index,
  index_last,
) {
  let button_next = html_button_next(root, async function next_on_click() {
    await on_click(add_1(index));
  });
  let button_previous = html_button_width_full_text_click_previous(
    root,
    async function previous_on_click() {
      await on_click(subtract_1(index));
    },
  );
  if (equal(index, 0)) {
    html_button_disable(button_previous);
  }
  if (equal(index, index_last)) {
    html_button_disable(button_next);
  }
}
