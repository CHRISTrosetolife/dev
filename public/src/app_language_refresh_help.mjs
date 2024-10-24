import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { html_button_up_text } from "./html_button_up_text.mjs";
import { app_language_text_group_previous } from "./app_language_text_group_previous.mjs";
import { app_language_text_group_next } from "./app_language_text_group_next.mjs";
import { app_language_text_next } from "./app_language_text_next.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { app_language_quiz_easy_very } from "./app_language_quiz_easy_very.mjs";
import { app_language_text_quiz } from "./app_language_text_quiz.mjs";
import { app_language_text_learn } from "./app_language_text_learn.mjs";
import { app_language_refresh_node_begin_text } from "./app_language_refresh_node_begin_text.mjs";
import { html_button_begin_text } from "./html_button_begin_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_language_refresh_node_back } from "./app_language_refresh_node_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
export async function app_language_refresh_help(
  roott,
  context,
  language_fluentt,
) {
  let { root, language_fluent } = context;
  let atom_size = app_language_atom_size();
  let group_pair_count = app_language_group_size() * atom_size;
  html_clear_scroll_top_centered(root);
  app_language_refresh_node_back(context);
  let paragraphs = [
    "This app teaches Cebuano.",
    "This app teaches vocabularly words.",
    string_combine_multiple([
      "If this is the first time you are using this app, then, to get started, tap or click this button: ",
      html_button_begin_text(app_language_refresh_node_begin_text()),
    ]),
    string_combine_multiple([
      "Then, you will read the first ",
      atom_size,
      " words and their definitions.",
    ]),
    string_combine_multiple([
      "If you want to read the words and their definitions again before being quizzed, then tap or click: ",
      await app_language_text_learn(language_fluent),
    ]),
    string_combine_multiple([
      "Then, when you are ready to be quizzed on these ",
      atom_size,
      " words, tap or click: ",
      await app_language_text_quiz(
        app_language_quiz_easy_very(),
        language_fluent,
      ),
    ]),
    string_combine_multiple([
      "While you are quizzing, first, you will see a word. Try to remember the translation of the word and how to spell it. Remembering like this will help you learn the words. Then, once you have tried to remember the translation, choose: ",
      await app_language_refresh_quiz_text_ready(language_fluent),
      ". Then the choices will appear. Choose the correct choice.",
    ]),
    "It is recommended to keep quizzing until you are comfortable with all of the words and their definitions.",
    "The other quiz difficulties will test you on the spelling of the words.",
    "It is okay to completely skip these difficulties.",
    string_combine_multiple([
      "Once you have learned the first ",
      atom_size,
      " words, then choose: ",
      await app_language_text_next(language_fluent),
    ]),
    string_combine_multiple([
      "Then, you can learn and quiz on the second ",
      atom_size,
      " words, just like you did on the first ",
      atom_size,
      " words.",
    ]),
    string_combine_multiple([
      "Once you have learned the second ",
      atom_size,
      " words, then choose: ",
      await app_language_text_next(language_fluent),
    ]),
    string_combine_multiple([
      "Then, you can quiz on the first ",
      atom_size * 2,
      " words as a review.",
    ]),
    string_combine_multiple([
      "Then, you continue to learn, quiz and next until you are reviewing ",
      group_pair_count,
      " words at once. This will be your first group of ",
      group_pair_count,
      " words.",
    ]),
    string_combine_multiple([
      "Once you have completed your first group of ",
      group_pair_count,
      " words, then choose: ",
      await app_language_text_group_next(language_fluent),
    ]),
    string_combine_multiple([
      "Then, you can do everything all over for the second group of ",
      group_pair_count,
      " words.",
    ]),
    "After you complete a second group or beyond, it is recommended to review previous groups until you are comfortable.",
    string_combine_multiple([
      "One way to go to a previous group is to choose: ",
      await app_language_text_group_previous(language_fluent),
    ]),
    string_combine_multiple([
      "Another way to go to a previous group is to keep choosing: ",
      html_button_up_text(),
    ]),
    string_combine_multiple([
      "Then, you can choose any group of ",
      group_pair_count,
      " words you want.",
    ]),
  ];
  each(paragraphs, (p) => {
    html_p_text(root, p);
  });
  app_language_refresh_node_back(context);
}
