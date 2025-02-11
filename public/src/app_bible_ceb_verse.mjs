import { html_style_green } from "./html_style_green.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { language_code_greek } from "./language_code_greek.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { list_first } from "./list_first.mjs";
import { bible_interlinear_words_audio_upload_map } from "./bible_interlinear_words_audio_upload_map.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_select_none } from "./html_select_none.mjs";
import { html_bible_word } from "./html_bible_word.mjs";
import { html_hr } from "./html_hr.mjs";
import { bible_verses_to_verse_tokens_each } from "./bible_verses_to_verse_tokens_each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { global_function_property_async } from "./global_function_property_async.mjs";
import { app_bible_verse_common } from "./app_bible_verse_common.mjs";
export async function app_bible_ceb_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let app_lambda = object_property_get(context, "app_lambda");
  let middle = await app_bible_verse_common(
    context,
    book_code,
    chapter,
    verse_number,
  );
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let ceb_version = "cebulb";
  let verses_ceb = await global_function_property_async(
    app_lambda,
    string_combine_multiple([ceb_version, "_", chapter_code]),
    async () => await bible_storage_version_http_get(ceb_version, chapter_code),
  );
  bible_verses_to_verse_tokens_each(
    verses_interlinear,
    verse_number,
    middle,
    lambda_each,
  );
  html_hr(middle);
  function lambda_each(token, row) {
    let word = object_property_get(token, "word");
    let word_component = html_bible_word(row, word);
    html_select_none(word_component);
    html_on_click(word_component, async () => {
      let ms = bible_interlinear_words_audio_upload_map([word], filter);
      let m = list_first(ms);
      await app_language_audio(language_code_greek(), m);
    });
    html_spacer(row);
    let transliteration = html_span_text(
      row,
      object_property_get(token, "transliteration"),
    );
    html_style_italic(transliteration);
    html_style_font_color_gray(transliteration);
    html_spacer(row);
    html_span_text(row, object_property_get(token, "translation"));
    html_spacer(row);
    let strong = object_property_get(token, "strong");
    let definition_entry = object_property_get(chapter_definitions, strong);
    let definition = html_span_text(
      row,
      object_property_get(
        definition_entry,
        bible_storage_interlinear_chapter_definitions_property(),
      ),
    );
    html_style_green(definition);
  }
}
