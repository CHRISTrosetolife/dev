import { bible_foreign_words } from "./bible_foreign_words.mjs";
export async function ceb_bible_words_5(args) {
  return await bible_foreign_words(args, "cebulb");
}
