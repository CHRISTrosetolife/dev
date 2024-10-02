import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { bible_words_greek_download } from "./bible_words_greek_download.mjs";
import { app_ceb_upload } from "./app_ceb_upload.mjs";
export async function sandbox() {
  assert_arguments_length(arguments, 0);
  if (0) {
    await bible_words_greek_download();
  }
  await app_ceb_upload();
}
