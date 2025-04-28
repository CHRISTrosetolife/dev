import { url_bible_songs } from "./url_bible_songs.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function app_index_choices() {
  let choices = [];
  list_add(choices, {
    text: "💻 development tools documentation",
    app: "dev",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🧑‍💻️ learn to code ",
      html_replace_nb("( javascript )"),
    ]),
    app: "learn_code",
  });
  list_add(choices, {
    text: "🎓 learn language cebuano",
    app: "ceb",
  });
  list_add(choices, {
    text: "📄 resume",
    app: "resume",
  });
  list_add(choices, {
    text: "📖 bible memorize",
    app: "memorize",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🎓 learn language english ",
      html_replace_nb("( from cebuano )"),
    ]),
    app: "en",
  });
  list_add(choices, {
    text: "🔍 search bible",
    app: "search",
  });
  list_add(choices, {
    text: "🎥 Bible Song videos",
    href: url_bible_songs(),
  });
  list_add(choices, {
    text: "📙 book syntagmatis theologiae christianae",
    app: "yyy8Uu",
  });
  if (false) {
    list_add(choices, {
      text: "🎮 game",
      app: "gs",
    });
  }
  list_add(choices, {
    text: "📃 personal links",
    app: "links",
  });
  return choices;
}
