import { app_language_2_bible_upload } from "./app_language_2_bible_upload.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
export async function app_he_upload() {
  let from = "el";
  let from_long = "greek";
  let bible_interlinear_cache_fn = bible_interlinear_cache_new;
  return await app_language_2_bible_upload(
    bible_interlinear_cache_fn,
    from_long,
    from,
  );
}
