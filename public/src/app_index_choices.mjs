import { url_audio_bible } from "./url_audio_bible.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function app_index_choices() {
  let choices = [];
  list_add(choices, {
    text: "💻 development tools documentation",
    page: "dev",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🧑‍💻️ learn to code ",
      html_replace_nb("( javascript )"),
    ]),
    page: "learn_code",
  });
  list_add(choices, {
    text: "🎓 learn language cebuano",
    page: "ceb",
  });
  list_add(choices, {
    text: "📄 resume",
    page: "resume",
  });
  list_add(choices, {
    text: "📖 bible memorize",
    page: "memorize",
  });
  list_add(choices, {
    text: "📃 TODO list",
    page: "todo",
  });
  list_add(choices, {
    text: "😴 sleep tracker",
    page: "sleep",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🎓 learn language english ",
      html_replace_nb("( from cebuano )"),
    ]),
    page: "en",
  });
  list_add(choices, {
    text: "⏺️ record bible",
    page: "record",
  });
  list_add(choices, {
    text: "🎥 audio bible videos",
    href: url_audio_bible(),
  });
  list_add(choices, {
    text: "📙 book syntagmatis theologiae christianae",
    page: "yyy8Uu",
  });
  list_add(choices, {
    text: "🎮 game",
    page: "gs",
  });
  list_add(choices, {
    text: "📃 list",
    page: "list",
  });
  return choices;
}
