import { bible_words_map } from "./bible_words_map.mjs";
import { bible_words_count_generic_symbols } from "./bible_words_count_generic_symbols.mjs";
import { list_find_verse_number } from "./list_find_verse_number.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
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
  let verse_ceb = list_find_verse_number(verses_ceb, verse_number);
  html_bible_verse(middle, book_code, chapter, verse_ceb);
  html_hr(middle);
  bible_verses_to_verse_tokens_each(
    verses_ceb,
    verse_number,
    middle,
    lambda_each,
  );
  html_hr(middle);
  let symbols = bible_words_count_generic_symbols();
  function lambda_each(word, row) {
    let word_component = html_bible_word(row, word);
    word = bible_words_map([word], symbols);
  }
}
