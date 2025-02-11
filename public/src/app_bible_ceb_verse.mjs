import { list_find_verse_number } from "./list_find_verse_number.mjs";
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
  let middle = await app_bible_verse_common(
    context,
    book_code,
    chapter,
    verse_number,
  );
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  let verses_ceb = await global_function_property_async(
    app_fn,
    chapter_code,
    async () => await bible_storage_version_http_get("cebulb", chapter_code),
  );
  let verse_interlinear = list_find_verse_number(verses_ceb, verse_number);
}
