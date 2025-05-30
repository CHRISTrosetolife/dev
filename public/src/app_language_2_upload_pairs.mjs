import { assert } from "./assert.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
import { string_includes_space_not } from "./string_includes_space_not.mjs";
import { list_all } from "./list_all.mjs";
import { app_language_2_audio_play_should } from "./app_language_2_audio_play_should.mjs";
import { app_language_2_upload_atoms_definitions } from "./app_language_2_upload_atoms_definitions.mjs";
import { app_language_upload_audio } from "./app_language_upload_audio.mjs";
import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_to_lookup_key_value_list } from "./list_to_lookup_key_value_list.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_language_2_upload_pairs(pairs, from, to, name) {
  assert(list_empty_not_is, [pairs]);
  pairs = list_filter(pairs, function (p) {
    let v = list_all(p, string_includes_space_not);
    return v;
  });
  let lefts = {};
  let rights = {};
  pairs = list_adder(function (la) {
    each(pairs, function (p) {
      let first = list_first(p);
      let second = list_second(p);
      if (
        object_property_exists(lefts, first) ||
        object_property_exists(rights, second)
      ) {
        return;
      }
      la(p);
      object_property_set(lefts, first, true);
      object_property_set(rights, second, true);
    });
  });
  let definitions = list_to_lookup_key_value_list(
    pairs,
    list_first,
    list_second,
  );
  let atoms = bible_words_spaceify(pairs);
  if (app_language_2_audio_play_should(from)) {
    await app_language_upload_audio(atoms, from);
  }
  await app_language_2_upload_atoms_definitions(
    atoms,
    definitions,
    from,
    to,
    name,
  );
}
