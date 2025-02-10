import { bible_interlinear_each_token_strong_number } from "./bible_interlinear_each_token_strong_number.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_el_alphabet_pairs } from "./app_el_alphabet_pairs.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
export async function app_el_upload() {
  let from = "el";
  let to = "en";
  let counts = {};
  let books = await bible_interlinear_cache_new();
  bible_interlinear_each_token_strong_number(books, (strong) => {
    object_property_increment(counts, strong);
  });
  let pairs = app_el_alphabet_pairs();
  return await app_language_2_upload_pairs(pairs, from, to);
}
