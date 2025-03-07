import { app_language_2_audio_play_should } from "./app_language_2_audio_play_should.mjs";
import { app_language_2_upload_atoms_definitions } from "./app_language_2_upload_atoms_definitions.mjs";
import { app_language_upload_audio } from "./app_language_upload_audio.mjs";
import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_to_lookup_key_value_list } from "./list_to_lookup_key_value_list.mjs";
export async function app_language_2_upload_pairs(pairs, from, to) {
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
