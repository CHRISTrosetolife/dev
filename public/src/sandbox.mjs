import { app_language_upload } from "./app_language_upload.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { bible_words_greek_download } from "./bible_words_greek_download.mjs";
export async function sandbox() {
  assert_arguments_length(arguments, 0);
  if (0) {
    await bible_words_greek_download();
  }
  await app_language_upload();
}
