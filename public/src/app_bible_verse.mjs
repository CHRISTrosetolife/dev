import { app_save_change_bible } from "./app_save_change_bible.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { app_bible } from "./app_bible.mjs";
import { html_bible_verse_navigation } from "./html_bible_verse_navigation.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
import { language_code_greek } from "./language_code_greek.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { list_first } from "./list_first.mjs";
import { bible_interlinear_words_audio_upload_map } from "./bible_interlinear_words_audio_upload_map.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_select_none } from "./html_select_none.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
import { bible_interlinear_words_greek_audio_upload_filter } from "./bible_interlinear_words_greek_audio_upload_filter.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
import { each } from "./each.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { firebase_download_bible } from "./firebase_download_bible.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function app_bible_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  await app_save_change_bible(app_bible, book_code, chapter, verse_number);
  html_clear_scroll_top_context(context);
  let { root } = context;
  let book_name = object_property_get(bible_books_prefix_to_name(), book_code);
  let verses = await app_verses_generic(app_record_verses, book_code, chapter);
  let chapter_interlinear = await firebase_download_bible(
    bible_storage_interlinear_book_path(book_name),
    chapter,
  );
  let chapter_definitions = await firebase_download_bible(
    bible_storage_interlinear_book_path(book_name),
    chapter,
  );
  let { verses: verses_interlinear } = chapter_interlinear;
  let verse = list_find_property(verses, "verse_number", verse_number);
  let verse_interlinear = list_find_property(
    verses_interlinear,
    "verse_number",
    verse_number,
  );
  html_bible_verse(root, book_code, chapter, verse);
  html_hr(root);
  let { tokens } = verse_interlinear;
  let filter = bible_interlinear_words_greek_audio_upload_filter();
  each(tokens, (token) => {
    let d = html_div(root);
    let word = object_property_get(token, "word");
    let word_component = html_span_text(d, word);
    html_select_none(word_component);
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
  html_hr(root);
  let n = await html_bible_verse_navigation(
    app_bible,
    app_bible_verse,
    context,
    book_code,
    chapter,
    verse_number,
    "reading and recording audio for audio Bible",
    false,
  );
}
