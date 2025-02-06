import { html_button } from "./html_button.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_buttons_choices(root, choices, on_choose, choice_default) {
  let buttons = list_adder((la) => {
    each(choices, (choice) => {
      let b = html_button(root, choice, () => {
        on_choose(choice);
        each(buttons, (b2) => {
          if (b === b2) {
            html_style_success(b2);
          } else {
            html_style_button_default(b2);
          }
        });
      });
      la(b);
      if (choice_default === choice) {
        html_style_success(b);
      }
    });
  });
}
