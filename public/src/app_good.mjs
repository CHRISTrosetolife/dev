import { prayer_lords } from "./prayer_lords.mjs";
import { prayers } from "./prayers.mjs";
import { html_button } from "./html_button.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { grace_good_generic_copy } from "./grace_good_generic_copy.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  let morning = "morning";
  let messages = [morning, "night"];
  each(messages, function (message) {
    html_button(body, message, function () {
      grace_good_generic_copy(message);
      if (message === morning) {
        html_p_text(body, prayer_lords());
        html_prayer(body, prayers());
      }
    });
  });
}
