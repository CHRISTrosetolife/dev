import { app_ceb_words_english_list } from "./app_ceb_words_english_list.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function app_ceb_words_english() {
  let english = await app_ceb_words_english_list();
  return list_join_newline(english);
}
