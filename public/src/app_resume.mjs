import { bible_verse_images } from "./bible_verse_images.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { html_wav_to_mp3 } from "./html_wav_to_mp3.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { bible_chapter_video } from "./bible_chapter_video.mjs";
import { firebase_upload } from "./firebase_upload.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { app_record } from "./app_record.mjs";
import { app_memorize_keyboard } from "./app_memorize_keyboard.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
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
  html_cycle_p(root, [noop], "");
  let learn_code = app_resume_header_3(root, "Learn to Code");
  html_style_link("learn_code.html")(learn_code);
  html_cycle_p(root, [noop], "");
  let ceb = app_resume_header_3(root, "Learn Cebuano Language");
  html_style_link("ceb.html")(ceb);
  html_cycle_p(root, [noop], "");
  let audio_bible = app_resume_header_3(root, "Audio Bible");
  html_style_link(url_audio_bible())(audio_bible);
  html_cycle_p(
    root,
    [
      html_style_link(function_name_to_url_github(app_record.name)),
      noop,
      html_style_link(function_name_to_url_github(app_record_verse.name)),
      noop,
      html_style_link(function_name_to_url_github(html_wav_to_mp3.name)),
      noop,
      html_style_link(function_name_to_url_github(firebase_upload.name)),
      noop,
      html_style_link(function_name_to_url_github(bible_chapter_video.name)),
      noop,
      html_style_link(
        function_name_to_url_github(bible_chapter_audio_download.name),
      ),
      noop,
      html_style_link(
        function_name_to_url_github(bible_chapter_audio_to_wav.name),
      ),
      noop,
      html_style_link(
        function_name_to_url_github(bible_chapter_audio_trim.name),
      ),
      noop,
      html_style_link(function_name_to_url_github(bible_verse_images.name)),
      noop,
    ],
    "app` to record audio `verse by verse`, `convert` to .mp3 to save space and `upload` to Firebase; `downloads` .mp3 files from Firebase; `converts` mp3 to .wav for processing; `trims` quiet from beginning and end of each .wav; `generates` an image for each verse, computing line-wrapping; `generates` a video of a bible chapter",
  );
  let memorize = app_resume_header_3(root, "Memorize Bible");
  html_style_link("memorize.html")(memorize);
  html_cycle_p(
    root,
    [
      noop,
      html_style_link(function_name_to_url_github(app_memorize_keyboard.name)),
      noop,
    ],
    "allows user to memorize a chapter of the bible; user types first letter of each word on physical or `onscreen keyboard`; words are gradually removed until user is reciting from memory",
  );
  let game = app_resume_header_3(root, "Game");
  html_style_link("gs.html")(game);
  html_cycle_p(root, [noop], "");
  app_resume_header_2(root, "Skills");
  app_resume_header_2(root, "Professional Experience");
  app_resume_header_2(root, "Education");
}
