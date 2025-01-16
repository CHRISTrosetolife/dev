import { list_size } from "./list_size.mjs";
import { object_property_set } from "./object_property_set.mjs";
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
  let lefts = {};
  let rights = {};
  let waiting = [];
  let count = 0;
  let pair_index = 0;
  let atoms = [];
  let atom = [];
  let pair = pairs[pair_index];
  list_add(atom, pair);
  object_property_set(object, "property_name", value);
  count++;
  if (list_size(atom) === atom_count) {
    list_add(atoms, atom);
  }
  pair_index++;
  return {
    atoms,
    definitions,
    inverted,
  };
}
