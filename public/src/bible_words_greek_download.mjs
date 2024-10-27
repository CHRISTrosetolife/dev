import { bible_words_download } from "./bible_words_download.mjs";
export async function bible_words_greek_download() {
  let language = "greek";
  await bible_words_download(language);
}
