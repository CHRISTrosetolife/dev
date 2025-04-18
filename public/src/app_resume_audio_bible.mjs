import { url_bible_songs } from "./url_bible_songs.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { noop } from "./noop.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { app_resume_header_3 } from "./app_resume_header_3.mjs";
export function app_resume_audio_bible(root) {
  let audio_bible = app_resume_header_3(root, "Audio Bible");
  html_style_link_blank(url_bible_songs())(audio_bible);
  html_cycle_p(
    root,
    [
      html_style_link_blank(function_name_to_url_github(fn_name("app_record"))),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("app_record_verse")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("html_wav_to_mp3")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("firebase_upload")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_chapter_audio_download")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_chapter_audio_to_wav")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_chapter_audio_trim")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_verse_images")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_chapter_videos")),
      ),
      noop,
      html_style_link_blank(
        function_name_to_url_github(fn_name("bible_chapter_video")),
      ),
      noop,
      ,
    ],
    "App` to record audio `verse by verse`; `converts` to .mp3 to save space and `uploads` to Firebase; `downloads` .mp3 files from Firebase; `converts` mp3 to .wav for processing; `trims` low volume from beginning and end of each .wav; `generates` an image for each verse, computing line-wrapping; generates videos for each bible `verse` and `chapter`",
  );
}
