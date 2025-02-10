import { list_second } from "./list_second.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { bible_interlinear_each_token_strong_number } from "./bible_interlinear_each_token_strong_number.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { list_reverse } from "./list_reverse.mjs";
export async function app_el_upload() {
  let from = "el";
  let to = "en";
  let counts = {};
  let books = await bible_interlinear_cache_new();
  bible_interlinear_each_token_strong_number(books, (strong) => {
    object_property_increment(counts, strong);
  });
  let pairs = list_adder((la) => {
    each_object(counts, (strong, count) => {
      la([strong, count]);
    });
  });
  list_sort_map(pairs, (p) => list_second(p));
  list_reverse(pairs);
  return pairs;
  return await app_language_2_upload_pairs(pairs, from, to);
}
