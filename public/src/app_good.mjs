import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { grace_good_generic_copy } from "./grace_good_generic_copy.mjs";
import { each } from "./each.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  let morning = "morning";
  let messages = [morning, "night"];
  each(messages, (message) => {
    html_button_width_full_text_click(body, message, () => {
      grace_good_generic_copy(message);
      if (message === morning) {
        let lines = string_combine_multiple([
          "Our Father, Who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven; give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; lead us not into temptation, but deliver us from evil|",
        ]);
        html_p_text(body);
      }
    });
  });
}
