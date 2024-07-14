import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { url_audio_bible } from "./url_audio_bible.mjs";
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
import { html_p_text } from "./html_p_text.mjs";
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
  html_style_link("dev.html")(dev);
  let learn_code = app_resume_header_3(root, "Learn to Code");
  html_style_link("learn_code.html")(learn_code);
  let ceb = app_resume_header_3(root, "Learn Cebuano Language");
  html_style_link("ceb.html")(ceb);
  let audio_bible = app_resume_header_3(root, "Audio Bible");
  html_style_link(url_audio_bible())(audio_bible);
  let memorize = app_resume_header_3(root, "Memorize Bible");
  html_style_link("memorize.html")(memorize);
  html_p_text(
    root,
    string_combine_multiple([
      "allows user to memorize a chapter of the bible; user types first letter of each word on physical or ",
      "onscreen keyboard",
    ]),
  );
  let game = app_resume_header_3(root, "Game");
  html_style_link("gs.html")(game);
  app_resume_header_2(root, "Skills");
  app_resume_header_2(root, "Professional Experience");
  app_resume_header_2(root, "Education");
}
