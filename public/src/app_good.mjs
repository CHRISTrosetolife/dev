import { prayers_famous } from "./prayers_famous.mjs";
import { prayers_music } from "./prayers_music.mjs";
import { prayers_bible } from "./prayers_bible.mjs";
import { prayers_unity } from "./prayers_unity.mjs";
import { prayers_family } from "./prayers_family.mjs";
import { html_button } from "./html_button.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { grace_good_generic_copy } from "./grace_good_generic_copy.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_denest } from "./list_denest.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  let morning = "morning";
  let messages = [morning, "night"];
  each(messages, function (message) {
    html_button(body, message, function () {
      grace_good_generic_copy(message);
      if (message === morning) {
        html_p_text(
          body,
          "Our Father, Who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven; give us this day our daily bread; And forgive us our trespasses as we forgive those who trespass against us; Lead us not into temptation, but deliver us from evil",
        );
        html_prayer(
          body,
          list_denest([
            "Cause me to perfectly obey the Father",
            "Cause me to perfectly obey Jesus",
            "Cause me to perfectly obey the Holy Spirit",
            "Cause me to be with Jesus today",
            "Cause me to fulfill my ministry",
            "Cause me to suffer in the flesh and cease from sin",
            "Cause me to either speak perfectly or be silent",
            "If possible have mercy on all creation",
            "If possible may all come to repentance",
            "May the coming of the day of God be hastened",
            "Help Christians be perfect in mercy",
            prayers_family(),
            "Cause me to love",
            "Cause me to be merciful",
            "Give me wisdom",
            "Give me humility",
            "Give me hope",
            "Give me patience",
            "Give me the faith of a mustard seed",
            "Cause me to be faithful in marriage",
            "Let my prayer be perfect",
            "Lead all souls to Jesus",
            "Protect all humans and all angels of the Lord from demons",
            "Cause all to choose good",
            "Cause all Christians to love",
            "Wisen all Christians",
            "Give all Christians humility",
            "Give all Christians patience",
            "Give all Christians the faith of a mustard seed",
            "Perfectly open up the eyes and ears of all to scripture and truth",
            "Perfectly engraft the word of God into every heart",
            "Cause all to be a perfect hearer and perfect doer of the word of God",
            "Cause the increase of your word being planted and watered to be maximized perfectly",
            "Cause Christians to be faithful in singleness",
            "Cause Christians to be faithful in marriage",
            prayers_unity(),
            "May all shepherds be humble",
            "Heal me",
            "Help me learn Cebuano",
            "Help my muscles grow",
            "Help me lose weight",
            "Help all Christians lose weight",
            "Help me fast",
            "Help all Christians fast",
            "Let there be harvest workers",
            prayers_bible(),
            "Let there be no pride",
            "Let there be no adultery",
            "Let there be no murder",
            "Let there be no sin against children",
            "Let there be no sin against babies",
            "Let there be no sin against unborn babies",
            "Let there be no thievery",
            "Let there be no doubt",
            "Let there be no jealousy or envy",
            "Let there be no sinful anger or wrath",
            "Let there be no pornography",
            "Let there be no rape",
            "Let there be no sexual sin",
            "Let there be no sexual sin against children",
            "Let there be no fornication",
            "Let there be no kidnapping",
            "Let there be no hostages",
            "Let there be no unnecessary war",
            "Let there be no violence",
            "Let there be no drugs",
            "Let there be no greed",
            "Let there be life and life abundantly",
            "Let all church meeting buildings be as You desire",
            "Let all Lord’s Supper bread and drink be as You desire",
            "Bless every elder",
            "Bless every overseer",
            "Bless every bishop",
            "Bless every pastor",
            "Bless every teacher",
            "Bless every apostle",
            "Bless every prophet",
            "Bless every deacon",
            "Let all preaching be perfect",
            "Let all teaching be perfect",
            "Let all shepherding be perfect",
            "Let all stewardship be perfect",
            "Bless all worship",
            "Bless all worship singing voices",
            "May the voice of every Christian lead all to Christ",
            "Bless my singing voice",
            "Bless my speaking voice",
            "May my voice lead all listeners to Christ",
            "Bless Christian songwriting",
            "Bless Christian speaking",
            "Bless Christian writing",
            "Bless Christian prayer",
            prayers_music(),
            prayers_famous(),
            "Let Bieber be generous",
            "Bless the nails of love",
            "Bless my works",
            "Bless my word of God speech",
            "Bless my programming",
            "Bless my programming speed",
            "Bless my apps",
            "Bless my music",
            "Bless my songs",
            "Bless my composing and improvising",
            "Bless my piano",
            "Bless my teaching",
            "Bless the works of Christians",
            "Help orphans",
            "Help children",
            "Help widows",
            "Help foreigners",
            "Help the poor",
            "Help the elderly",
            "Help the prisoners",
            "Help the sick",
          ]),
        );
      }
    });
  });
}
