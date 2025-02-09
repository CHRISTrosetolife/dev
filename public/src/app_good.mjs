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
  each(messages, (message) => {
    html_button(body, message, () => {
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
          "Bless papa",
          "Bless mama",
          "Bless my family",
          "Bless dad",
          "Bless mom",
          "Bless granddaddy",
          "Bless grandma",
          "Bless nana",
          "Bless Thom",
          "Bless Micah",
          "Bless Alexa",
          "Bless Thea",
          "Bless Hallie",
          "Bless Brandon",
          "Bless Eric",
          "Bless Naila",
          "Bless Peter",
          "Bless Naheed",
          "Bless Alex",
          "Bless Adam",
          "Bless Alan",
          "Bless Christian",
          "Bless Erica",
          "Bless Shalini",
          "Bless Jennifer",
          "Bless Mandi",
          "Bless Tom",
          "Bless Lindsay",
          "Bless Mike",
          "Bless Sherry",
          "Bless Joseph",
          "Bless Metta",
          "Bless Jakob",
          "Bless Susie",
          "Bless Michael",
          "Bless Nancy",
          "Bless Zachary",
          "Give me wisdom",
          "Give me humility",
          "Let my prayer be perfect",
          "Lead all souls to Jesus",
          "Cause all to choose good",
          "Wisen all Christians",
          "Unite the church",
          "Unite the church about head coverings",
          "Unite the church about transgender",
          "Unite the church about homosexuality",
          "Unite the church about women in leadership",
          "Unite the church about marriage roles",
          "Unite the church about bible copyrights",
          "Unite the church about believer-to-believer lawsuits",
          "Unite the church about abortion",
          "Unite Catholics",
          "Unite Eastern Orthodox",
          "Unite Oriental Orthodox",
          "Unite Church of the East",
          "Unite Anglican",
          "Unite Lutheran",
          "Unite Presbyterian",
          "Unite Methodist",
          "Unite Pentecostal",
          "Unite Baptist",
          "Unite Assemblies of God",
          "Unite Seventh-Day Adventist",
          "Unite Mormons",
          "Unite Jehovah's Witness",
          "May all shepherds be in communion with each other",
          "Heal me",
          "Help me learn Cebuano",
          "Help my muscles grow",
          "Let there be harvest workers",
          "Let there be no adultery",
          "Let there be no murder",
          "Let there be no sickness",
          "Let there be no thievery",
          "Let there be no jealousy or envy",
          "Let there be no pornography",
          "Let there be no rape",
          "Let there be no sexual sin",
          "Let there be no violence",
          "Let there be no drugs",
          "Let there be life and life abundantly",
          "Let all preaching be perfect",
          "Let all teaching be perfect",
          "Let all shepherding be perfect",
          "Bless all worship",
          "Bless all worship singing voices",
          "May the voice of every Christian lead all to Christ",
          "Bless Christian songwriting",
          "Bless Christian speaking",
          "Bless Christian writing",
          "Help the president",
          "Bless the nails of love",
          "Bless my works",
          "Bless my word of God speech",
          "Bless my programming",
          "Bless my apps",
          "Bless the works of Christians",
          "Help orphans",
          "Help children",
          "Help widows",
          "Help foreigners",
          "Help the poor",
          "Help the sick",
        ]);
      }
    });
  });
}
