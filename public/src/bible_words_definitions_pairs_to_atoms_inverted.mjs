import { bible_words_spaceify } from "./bible_words_spaceify.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
export function bible_words_definitions_pairs_to_atoms_inverted(
  definitions,
  pairs,
) {
  let inverted = object_list_invert(definitions);
  let atoms = bible_words_spaceify(pairs);
  return {
    atoms,
    definitions,
    inverted,
  };
}
