import { html_div_text } from "./html_div_text.mjs";
import { list_zip } from "./list_zip.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
import { bible_interlinear_words_audio_upload_map } from "./bible_interlinear_words_audio_upload_map.mjs";
import { bible_interlinear_words_greek_audio_upload_filter } from "./bible_interlinear_words_greek_audio_upload_filter.mjs";
import { language_code_greek } from "./language_code_greek.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { list_first } from "./list_first.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { json_to } from "./json_to.mjs";
export async function app_bible() {
  let root = await firebase_initialize_axios();
  let book_code = "MAT";
  let chapter = "1";
  let book_name = object_property_get(bible_books_prefix_to_name(), book_code);
  let verses = await app_verses_generic(app_record_verses, book_code, chapter);
  let chapter_interlinear = await firebase_download_bible(
    bible_storage_interlinear_book_path(book_name),
    chapter,
  );
  let { verses: verses_interlinear } = chapter_interlinear;
  each(list_zip([verses, verses_interlinear]), (z) => {
    let { verse, verse_interlinear } = z;
    html_div_text(root, json_to(verse));
    let { tokens } = verse_interlinear;
    let filter = bible_interlinear_words_greek_audio_upload_filter();
    each(tokens, (token) => {
      let d = html_div(root);
      let word = object_property_get(token, "word");
      let word_component = html_span_text(d, word);
      html_style_bold(word_component);
      html_style_green(word_component);
      html_on_click(word_component, async () => {
        let ms = bible_interlinear_words_audio_upload_map([word], filter);
        let m = list_first(ms);
        await app_language_audio(language_code_greek(), string_encoded_to(m));
      });
      html_spacer(d);
      let transliteration = html_span_text(
        d,
        object_property_get(token, "transliteration"),
      );
      html_style_italic(transliteration);
      html_style_font_color_gray(transliteration);
      html_spacer(d);
      let translation = html_span_text(
        d,
        object_property_get(token, "translation"),
      );
    });
  });
}
