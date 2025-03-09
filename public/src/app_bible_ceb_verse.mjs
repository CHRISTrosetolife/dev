import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_style } from "./html_style.mjs";
import { ceb_definition_html_a } from "./ceb_definition_html_a.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { sleep } from "./sleep.mjs";
import { html_style_background_color_select } from "./html_style_background_color_select.mjs";
import { html_span } from "./html_span.mjs";
import { html_bible_verse_number } from "./html_bible_verse_number.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { bible_verses_to_verse_tokens } from "./bible_verses_to_verse_tokens.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_ceb_definitions_path } from "./bible_storage_ceb_definitions_path.mjs";
import { bible_word_map } from "./bible_word_map.mjs";
import { html_bible_word } from "./html_bible_word.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { global_function_property_async } from "./global_function_property_async.mjs";
import { app_bible_verse_common } from "./app_bible_verse_common.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { object_properties } from "./object_properties.mjs";
import { unawait } from "./unawait.mjs";
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
    app_bible_ceb_verse,
  );
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let ceb_version = "cebulb";
  let verses_ceb = await global_function_property_async(
    app_lambda,
    string_combine_multiple([ceb_version, "_", chapter_code]),
    async function () {
      let v = await bible_storage_version_http_get(ceb_version, chapter_code);
      return v;
    },
  );
  html_bible_verse_number(middle, book_code, chapter, verse_number);
  let tokens_component = html_span(middle);
  html_hr(middle);
  let definitions = await global_function_property_async(
    app_lambda,
    string_combine_multiple([
      ceb_version,
      "_",
      chapter_code,
      "_",
      bible_storage_interlinear_chapter_definitions_name(),
    ]),
    async function () {
      let v2 = await bible_storage_version_http_get(
        bible_storage_ceb_definitions_path(ceb_version, chapter_code),
        bible_storage_interlinear_chapter_definitions_name(),
      );
      return v2;
    },
  );
  let verse_word_selected = null;
  let row_selected = null;
  let tokens = bible_verses_to_verse_tokens(verses_ceb, verse_number);
  each(tokens, function (word) {
    html_spacer(tokens_component);
    let verse_word = html_span_text(tokens_component, word);
    let mapped = bible_word_map(word);
    if (mapped === null) {
      return;
    }
    let row = html_div(middle);
    html_on_click(verse_word, function () {
      row_selected = html_style_background_color_select(row_selected, row);
      html_scroll_center(row);
    });
    let verse_word_red = html_bible_word(row, word);
    html_on_click(verse_word_red, async function () {
      verse_word_selected = html_style_background_color_select(
        verse_word_selected,
        verse_word,
      );
      row_selected = html_style_background_color_select(row_selected, null);
      html_scroll_center(verse_word);
      unawait(async function () {
        await sleep(1000);
        html_style_background_color_transparent(verse_word);
      });
    });
    html_spacer(row);
    let definition_entry = object_property_get(definitions, mapped);
    if (object_property_exists(definition_entry, mapped)) {
      let definition = ceb_definition_html_a(row, definition_entry, mapped);
      html_style_green(definition);
    }
    each(object_properties(definition_entry), function (word_defined) {
      if (word_defined === mapped) {
        return;
      }
      html_spacer(row);
      let verse_word_orange = html_bible_word(row, word_defined);
      html_style(verse_word_orange, {
        color: "darkred",
      });
      html_spacer(row);
      let definition = ceb_definition_html_a(
        row,
        definition_entry,
        word_defined,
      );
      html_style(definition, {
        color: "darkgreen",
      });
    });
  });
}
