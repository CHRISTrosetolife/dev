import { function_rename_alias } from "./function_rename_alias.mjs";
import { function_rename } from "./function_rename.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_resume_audio_bible } from "./app_resume_audio_bible.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_style_link } from "./html_style_link.mjs";
import { app_resume_header_3 } from "./app_resume_header_3.mjs";
import { app_resume_header_2 } from "./app_resume_header_2.mjs";
import { app_resume_header } from "./app_resume_header.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { html_spacer_bullet } from "./html_spacer_bullet.mjs";
import { html_email } from "./html_email.mjs";
import { html_phone } from "./html_phone.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
export function app_resume() {
  let root = html_style_default_initialize();
  app_resume_header(root, "JARED MATHIS");
  let row = html_p(root);
  html_style_centered(row);
  html_span_text(row, html_replace_nb("1612 Orlando Circle South"));
  html_spacer_bullet(row);
  html_span_text(row, html_replace_nb("Jacksonville, Florida 32207"));
  html_spacer_bullet(row);
  html_phone(row, "+1 (904) 314-4052");
  html_spacer_bullet(row);
  html_email(row, "JESUSrosetolife@protonmail.com");
  app_resume_header_2(root, "Projects");
  let dev = app_resume_header_3(root, "Development Tools");
  html_cycle_p(
    root,
    [
      noop,
      html_style_link(function_name_to_url_github("app_memorize_keyboard")),
      noop,
    ],
    string_combine_multiple([
      'Transforms source code files through its abstract syntax tree. Includes a `terminal` for running functions, `aliases` for running commonly used functions and `$-prefixed "macros"` that transform code `when a file is saved`. For example ',
      function_rename_alias(),
      " is an alias for `",
      function_rename.name,
      "` that renames a function across all files, including fixing all references.",
    ]),
  );
  html_style_link("dev.html")(dev);
  html_cycle_p(root, [noop], "");
  let learn_code = app_resume_header_3(root, "Learn to Code");
  html_style_link("learn_code.html")(learn_code);
  html_cycle_p(
    root,
    [noop],
    "User is presented with JavaScript programming concepts; for each concept: user s presented with randomly generated source code and output; then user chooses correct output given randomly generated source code; user chooses correct source code given a randomly generated output",
  );
  let ceb = app_resume_header_3(root, "Learn Cebuano Language");
  html_style_link("ceb.html")(ceb);
  html_cycle_p(
    root,
    [noop],
    "Allows user to learn most common Cebuano words; Most frequent words in English and Cebuano are computed from Bibles; User is presented Cebuano words and their English translations; Then user chooses English translations for each Cebuano word; then user chooses Cebuano word for each English translation; Then user review new and old words until 96 words are learned; Then user chooses the next group of 96 words to study, beginning with the first 6 words; When quizzing user chooses between choosing an entire word at once or 1, 2 or 3 letters at a time",
  );
  app_resume_audio_bible(root);
  let memorize = app_resume_header_3(root, "Memorize Bible");
  html_style_link("memorize.html")(memorize);
  html_cycle_p(
    root,
    [
      noop,
      html_style_link(function_name_to_url_github("app_memorize_keyboard")),
      noop,
    ],
    "Allows user to memorize a chapter of the bible; user types first letter of each word on physical or `onscreen keyboard`; words are gradually removed until user is reciting from memory; user can choose to memorize chapters from multiple versions of the Bible",
  );
  let game = app_resume_header_3(root, "Game");
  html_style_link("gs.html")(game);
  html_cycle_p(root, [noop], "");
  app_resume_header_2(root, "Skills");
  app_resume_header_2(root, "Professional Experience");
  app_resume_header_2(root, "Education");
}
