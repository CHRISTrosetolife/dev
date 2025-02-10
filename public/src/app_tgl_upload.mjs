import { app_tgl_upload_pairs_cache } from "./app_tgl_upload_pairs_cache.mjs";
import { app_language_upload_audio } from "./app_language_upload_audio.mjs";
import { app_language_2_upload_atoms_definitions } from "./app_language_2_upload_atoms_definitions.mjs";
import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { list_to_lookup_key_value_list } from "./list_to_lookup_key_value_list.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_first } from "./list_index_first.mjs";
export async function app_tgl_upload() {
  let from = "tgl";
  let to = "en";
  let limit = 6355;
  let pairs = await app_tgl_upload_pairs_cache(limit);
  list_index_first(pairs, () => {});
  return;
  let definitions = list_to_lookup_key_value_list(
    pairs,
    list_first,
    list_second,
  );
  let atoms = bible_words_spaceify(pairs);
  await app_language_upload_audio(atoms, from);
  await app_language_2_upload_atoms_definitions(atoms, definitions, from, to);
}
