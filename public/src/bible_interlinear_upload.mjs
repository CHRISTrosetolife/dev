import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
import { object_merge } from "./object_merge.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_interlinear_upload() {
  let books = await bible_interlinear_cache_new();
  let chapters = list_adder((la) => {
    bible_interlinear_each_chapter(books, (chapter, book_name) => {
      let r = object_merge(
        {
          book_name,
        },
        chapter,
      );
      la(r);
    });
  });
  let chapter = list_first(chapters);
  await bible_storage_version_upload(
    path_join(["interlinear", object_property_get(chapter, "book_name")]),
    object_property_get(chapter, "chapter_name"),
    chapter,
  );
}
