import { bible_words_definitions_pairs_to_atoms_inverted } from "./bible_words_definitions_pairs_to_atoms_inverted.mjs";
import { bible_words_definitions_pairs } from "./bible_words_definitions_pairs.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
export async function bible_words_definitions_atoms(language) {
  let { pairs, definitions: definitions_list } =
    await bible_words_definitions_pairs(language);
  let definitions = list_to_lookup_key_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  return bible_words_definitions_pairs_to_atoms_inverted(definitions, pairs);
}
