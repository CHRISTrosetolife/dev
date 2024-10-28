import { log } from "./log.mjs";
import { bible_interlinear_chapter_each_token } from "./bible_interlinear_chapter_each_token.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each_async } from "./each_async.mjs";
import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
  await each_async(chapters, async (chapter) => {
    let book_name = object_property_get(chapter, "book_name");
    await bible_storage_version_upload(
      bible_storage_interlinear_book_path(book_name),
      object_property_get(chapter, "chapter_name"),
      chapter,
    );
    let tokens = list_adder_unique((la) => {
      bible_interlinear_chapter_each_token(chapter, la);
    });
    log({
      tokens,
    });
  });
}
