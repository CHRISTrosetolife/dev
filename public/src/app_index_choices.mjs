import { fn_name } from "./fn_name.mjs";
import { url_bible_songs } from "./url_bible_songs.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function app_index_choices() {
  let choices = [];
  list_add(choices, {
    text: "💻 development tools documentation",
    app: fn_name("app_dev"),
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🧑‍💻️ learn to code ",
      html_replace_nb("( javascript )"),
    ]),
    app: fn_name("app_learn_code"),
  });
  list_add(choices, {
    text: "🎓 learn language cebuano",
    app: fn_name("app_ceb"),
  });
  list_add(choices, {
    text: "📄 portfolio",
    app: fn_name("app_portfolio"),
  });
  list_add(choices, {
    text: "📖 bible memorize",
    app: fn_name("app_memorize"),
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🎓 learn language english ",
      html_replace_nb("( from cebuano )"),
    ]),
    app: fn_name("app_en"),
  });
  list_add(choices, {
    text: "🔍 search bible",
    app: fn_name("app_search"),
  });
  list_add(choices, {
    text: "🎥 Bible Song videos",
    href: url_bible_songs(),
  });
  list_add(choices, {
    text: "📙 book syntagmatis theologiae christianae",
    app: fn_name("app_yyy8Uu"),
  });
  if (false) {
    list_add(choices, {
      text: "🎮 game",
      app: fn_name("app_gs"),
    });
  }
  list_add(choices, {
    text: "📃 personal links",
    app: fn_name("app_links"),
  });
  return choices;
}
