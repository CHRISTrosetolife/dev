import { html_prayer } from "./html_prayer.mjs";
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
        html_p_text(
          body,
          "Our Father, Who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven; give us this day our daily bread; And forgive us our trespasses as we forgive those who trespass against us; Lead us not into temptation, but deliver us from evil",
        );
        html_prayer(body, [
          "Cause me to perfectly obey the Father;",
          "Cause me to perfectly obey Jesus",
          "Cause me to perfectly obey the Holy Spirit",
          "Unite the church",
          "Cause all to choose good",
          "Cause me to be with Jesus soon",
          "Help the president",
        ]);
      }
    });
  });
}
