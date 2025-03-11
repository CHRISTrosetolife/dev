import { english_words_dictionary_take_soft } from "./english_words_dictionary_take_soft.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { each } from "./each.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function app_language_2_upload_pairs_bohol(
  language_from,
  language_to,
  limit,
) {
  let definitions_get = async function (w) {
    let v = await definition_bohol(w, language_from, language_to);
    return v;
  };
  let taken = await english_words_dictionary_take_soft(limit);
  let pairs = await list_adder_async(async function (la) {
    await each_log_async(taken, async function (w) {
      let inner = await definition_bohol(w, language_from, language_to);
      each(inner, la);
    });
  });
  pairs = list_unique_json(pairs);
  return pairs;
}
