import { bible_books_upload } from "./bible_books_upload.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function bible_engbsb_books_upload() {
  assert_arguments_length(arguments, 0);
  let bible_folder = "engbsb";
  await bible_books_upload(bible_folder);
}
