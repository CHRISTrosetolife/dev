import { definition_bohol } from "./definition_bohol.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { each } from "./each.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
export async function app_tgl_upload_pairs(limit) {
  let language_to = "Tagalog";
  let language_from = "English";
  let filtered2 = await english_words_dictionary();
  let taken = list_take_soft(filtered2, limit);
  let pairs = await list_adder_async(async function (la) {
    await each_log_async(taken, async function (w) {
      let inner = await definition_bohol(w, language_from, language_to);
      each(inner, la);
    });
  });
  pairs = list_unique_json(pairs);
  return pairs;
}
