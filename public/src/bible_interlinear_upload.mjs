import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
export async function bible_interlinear_upload() {
  let books = await bible_interlinear_cache_new();
  bible_interlinear_each_chapter(books, chapter_each);
}
