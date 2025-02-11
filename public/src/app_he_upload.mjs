import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { app_language_2_bible_upload } from "./app_language_2_bible_upload.mjs";
export async function app_he_upload() {
  let from = "he";
  let from_long = "hebrew";
  let bible_interlinear_cache_fn = bible_interlinear_cache_old;
  return await app_language_2_bible_upload(
    bible_interlinear_cache_fn,
    from_long,
    from,
  );
}
