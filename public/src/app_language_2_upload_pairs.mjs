import { each } from "./each.mjs";
import { string_includes_space_not } from "./string_includes_space_not.mjs";
import { log } from "./log.mjs";
import { list_all } from "./list_all.mjs";
import { app_language_2_audio_play_should } from "./app_language_2_audio_play_should.mjs";
import { app_language_2_upload_atoms_definitions } from "./app_language_2_upload_atoms_definitions.mjs";
import { app_language_upload_audio } from "./app_language_upload_audio.mjs";
import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_to_lookup_key_value_list } from "./list_to_lookup_key_value_list.mjs";
import { list_filter } from "./list_filter.mjs";
export async function app_language_2_upload_pairs(pairs, from, to) {
  pairs = list_filter(pairs, function (p) {
    let v = list_all(p, string_includes_space_not);
    return v;
  });
  let lefts = {};
  let rights = {};
  each(list, function (item) {});
  log({
    pairs,
  });
  return;
  let definitions = list_to_lookup_key_value_list(
    pairs,
    list_first,
    list_second,
  );
  let atoms = bible_words_spaceify(pairs);
  if (app_language_2_audio_play_should(from)) {
    await app_language_upload_audio(atoms, from);
  }
  await app_language_2_upload_atoms_definitions(atoms, definitions, from, to);
}
