import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { bible_verses_to_verse_tokens } from "./bible_verses_to_verse_tokens.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_ceb_definitions_path } from "./bible_storage_ceb_definitions_path.mjs";
import { bible_word_map } from "./bible_word_map.mjs";
import { list_find_verse_number } from "./list_find_verse_number.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
import { html_bible_word } from "./html_bible_word.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { global_function_property_async } from "./global_function_property_async.mjs";
import { app_bible_verse_common } from "./app_bible_verse_common.mjs";
import { ceb_definition_url } from "./ceb_definition_url.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_on_click } from "./html_on_click.mjs";
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
    async () => await bible_storage_version_http_get(ceb_version, chapter_code),
  );
  let verse_ceb = list_find_verse_number(verses_ceb, verse_number);
  html_bible_verse(middle, book_code, chapter, verse_ceb, (root, token) => {
    let s = html_span_text(root, token);
    html_on_click(s, () => {});
    html_scroll_center(s);
  });
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
    async () =>
      await bible_storage_version_http_get(
        bible_storage_ceb_definitions_path(ceb_version, chapter_code),
        bible_storage_interlinear_chapter_definitions_name(),
      ),
  );
  let tokens = bible_verses_to_verse_tokens(verses_ceb, verse_number);
  each(tokens, (word) => {
    let mapped = bible_word_map(word);
    if (mapped === null) {
      return;
    }
    let row = html_div(middle);
    html_bible_word(row, word);
    html_spacer(row);
    let definition_entry = object_property_get(definitions, mapped);
    let definition = html_a_blank(
      row,
      list_join_comma_space(
        object_property_get(
          definition_entry,
          bible_storage_interlinear_chapter_definitions_property(),
        ),
      ),
      ceb_definition_url(mapped),
    );
    html_style_green(definition);
  });
}
