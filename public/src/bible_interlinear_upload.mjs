import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
import { object_merge } from "./object_merge.mjs";
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
  await bible_storage_version_upload();
  return chapters;
}
