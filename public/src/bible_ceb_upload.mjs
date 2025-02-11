import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_interlinear_chapter_definitions_path } from "./bible_storage_interlinear_chapter_definitions_path.mjs";
import { bible_interlinear_definition } from "./bible_interlinear_definition.mjs";
import { list_to_lookup_value_async } from "./list_to_lookup_value_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { bible_interlinear_chapter_each_token } from "./bible_interlinear_chapter_each_token.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_async } from "./each_async.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_ceb_upload() {
  await bible_books_chapters("cebulb");
  let language = "greek";
  let books = await bible_interlinear_cache_new();
  let chapters = list_adder((la) => {
    bible_interlinear_each_chapter(books, (chapter, book_name) => {
      let r = object_merge_strict(
        {
          book_name,
        },
        chapter,
      );
      la(r);
    });
  });
  await each_async(chapters, async (chapter) => {
    let book_name = object_property_get(chapter, "book_name");
    let chapter_name = object_property_get(chapter, "chapter_name");
    await bible_storage_version_upload(
      bible_storage_interlinear_book_path(book_name),
      chapter_name,
      chapter,
    );
    let tokens = list_adder_unique((la) => {
      bible_interlinear_chapter_each_token(chapter, la);
    });
    let strongs = list_map_property(tokens, "strong");
    strongs = list_unique(strongs);
    let definitions = await list_to_lookup_value_async(strongs, async (s) => ({
      [bible_storage_interlinear_chapter_definitions_property()]:
        await bible_interlinear_definition(language, s),
    }));
    await bible_storage_version_upload(
      bible_storage_interlinear_chapter_definitions_path(
        book_name,
        chapter_name,
      ),
      bible_storage_interlinear_chapter_definitions_name(),
      definitions,
    );
  });
}
