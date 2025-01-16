import { list_map_index } from "./list_map_index.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
import { bible_words_definitions_pairs } from "./bible_words_definitions_pairs.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
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
  pairs = list_map_index(pairs, (pair, index) => ({
    pair,
    index,
  }));
  let inverted = object_list_invert(definitions);
  let lefts = {};
  let rights = {};
  let waiting = [];
  let atoms = [];
  let atom = [];
  each_index(pairs, (pair, index) => {
    if (list_empty_is(waiting)) {
      list_add(waiting, {
        pair,
        index,
      });
    }
    each(waiting, (w) => {
      let { pair, index } = w;
      let left = list_first(pair);
      let right = list_second(pair);
      let wait = false;
      if (object_property_exists(lefts, left)) {
        let left_index = object_property_get(lefts, left);
        if (left_index + take_count * atom_count > index) {
          wait = true;
        }
      }
      list_add(waiting, pair);
      list_add(atoms, pair);
      object_property_set(lefts, left, index);
      object_property_set(rights, right, index);
      if (list_size(atom) === atom_count) {
        list_add(atoms, atom);
      }
    });
  });
  return {
    atoms,
    definitions,
    inverted,
  };
}
