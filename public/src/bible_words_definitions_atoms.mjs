import { list_add } from "./list_add.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
import { bible_words_definitions_pairs } from "./bible_words_definitions_pairs.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
export async function bible_words_definitions_atoms(language) {
  let take_count = 16;
  let atom_count = app_language_atom_size();
  let { pairs, definitions: definitions_list } =
    await bible_words_definitions_pairs(language);
  let definitions = list_to_lookup_key_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  let inverted = object_list_invert(definitions);
  let waiting = [];
  let pair_index = 0;
  let atoms = [];
  let group = [];
  let pair = pairs[pair_index];
  list_add(group, pair);
  return {
    atoms,
    definitions,
    inverted,
  };
}
