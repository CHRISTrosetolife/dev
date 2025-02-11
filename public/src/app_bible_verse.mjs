import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { global_function_property_async } from "./global_function_property_async.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { app_bible_verse_common } from "./app_bible_verse_common.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { html_style_red } from "./html_style_red.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_interlinear_chapter_definitions_path } from "./bible_storage_interlinear_chapter_definitions_path.mjs";
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
import { each } from "./each.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function app_bible_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let middle = await app_bible_verse_common(
    context,
    book_code,
    chapter,
    verse_number,
  );
  let book_name = object_property_get(bible_books_prefix_to_name(), book_code);
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let verses = await global_function_property_async(
    app_fn,
    string_combine_multiple(["interlinear_", chapter_code]),
    async () =>
      await bible_storage_version_http_get(version_code, chapter_code),
  );
  let chapter_interlinear = await bible_storage_version_http_get(
    bible_storage_interlinear_book_path(book_name),
    chapter,
  );
  let chapter_definitions = await bible_storage_version_http_get(
    bible_storage_interlinear_chapter_definitions_path(book_name, chapter),
    bible_storage_interlinear_chapter_definitions_name(),
  );
  let { verses: verses_interlinear } = chapter_interlinear;
  let verse_interlinear = list_find_property(
    verses_interlinear,
    "verse_number",
    verse_number,
  );
  let { tokens } = verse_interlinear;
  let filter = bible_interlinear_words_greek_audio_upload_filter();
  each(tokens, (token) => {
    let d = html_div(middle);
    let word = object_property_get(token, "word");
    let word_component = html_span_text(d, word);
    html_select_none(word_component);
    html_style_bold(word_component);
    html_style_red(word_component);
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
    html_spacer(d);
    let strong = object_property_get(token, "strong");
    let definition_entry = object_property_get(chapter_definitions, strong);
    let definition = html_span_text(
      d,
      object_property_get(
        definition_entry,
        bible_storage_interlinear_chapter_definitions_property(),
      ),
    );
    html_style_green(definition);
  });
  html_hr(middle);
}
