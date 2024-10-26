import { list_adder } from "./list_adder.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
export async function bible_interlinear_upload() {
  let books = await bible_interlinear_cache_new();
  let chapters = list_adder((la) => {
    bible_interlinear_each_chapter(books, la);
  });
  return chapters;
}
