import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
export async function ceb_bible_words_definitions_pairs_find(query) {
  await ceb_bible_words_definitions_pairs_compute();
}
