import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { bible_interlinear_upload_generic } from "./bible_interlinear_upload_generic.mjs";
export async function bible_interlinear_upload_hebrew() {
  let language = "hebrew";
  let books_get = bible_interlinear_cache_old;
  await bible_interlinear_upload_generic(language, books_get);
}
