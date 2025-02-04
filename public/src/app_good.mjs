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
          "Cause me to perfectly obey the Father",
          "Cause me to perfectly obey Jesus",
          "Cause me to perfectly obey the Holy Spirit",
          "Cause me to be with Jesus today",
          "Bless our marriage",
          "Bless trip",
          "Bless our children",
          "Cause me to fulfill my ministry",
          "Cause me to suffer in the flesh and cease from sin",
          "Cause me to either speak perfectly or be silent",
          "Bless the family of love",
          "Bless my family",
          "Give me wisdom",
          "Let my prayer be perfect",
          "Lead all souls to Jesus",
          "Cause all to choose good",
          "Wisen all Christians",
          "Unite the church",
          "May the church be united about head coverings",
          "May the church be united about transgender",
          "May the church be united about homosexuality",
          "May the church be united about women in leadership",
          "May the church be united about marriage",
          "May all Shepherds be in communion with each other",
          "Heal me",
          "Help me learn Cebuano",
          "Help my muscles grow",
          "Let there be harvest workers",
          "Let there be no adultery",
          "Let there be no murder",
          "Let there be no sickness",
          "Let there be no thievery",
          "Let there be no jealousy",
          "Let there be no pornography",
          "Let there be life and life abundantly",
          "Let all preaching be perfect",
          "Let all teaching be perfect",
          "Let all shepherding be perfect",
          "Help the president",
          "Bless the nails of love",
          "Bless my works",
          "Bless my word of God speech",
          "Bless my programming",
          "Bless my apps",
          "Bless the works of Christians",
        ]);
      }
    });
  });
}
