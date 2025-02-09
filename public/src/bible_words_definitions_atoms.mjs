import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { bible_words_definitions_pairs } from "./bible_words_definitions_pairs.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
export async function bible_words_definitions_atoms(language) {
  let { pairs, definitions: definitions_list } =
    await bible_words_definitions_pairs(language);
  let definitions = list_to_lookup_key_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  let inverted = object_list_invert(definitions);
  let atoms;
  atoms = bible_words_spaceify(pairs);
  return {
    atoms,
    definitions,
    inverted,
  };
}
