import { list_map_index } from "./list_map_index.mjs";
import { each } from "./each.mjs";
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
import { list_remove } from "./list_remove.mjs";
export async function bible_words_definitions_atoms(language) {
  let { pairs, definitions: definitions_list } =
    await bible_words_definitions_pairs(language);
  let definitions = list_to_lookup_key_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  let take_count = 16;
  let atom_count = app_language_atom_size();
  let group_count = take_count * atom_count;
  pairs = list_map_index(pairs, (pair, index) => ({
    pair,
    index,
  }));
  let inverted = object_list_invert(definitions);
  let lefts = {};
  let rights = {};
  let atoms = [];
  let atom = [];
  let count = 0;
  while (true) {
    let added = false;
    each(pairs, (p) => {
      let { pair, index } = p;
      let left = list_first(pair);
      let right = list_second(pair);
      if (wait(lefts, left, index) || wait(rights, right, index)) {
        return;
      }
      list_add(atom, pair);
      object_property_set(lefts, left, count);
      object_property_set(rights, right, count);
      count++;
      added = true;
      if (list_size(atom) >= atom_count) {
        list_add(atoms, atom);
        atom = [];
      }
      list_remove(pairs, p);
      return true;
      function wait(lrs, lr) {
        let w = false;
        if (object_property_exists(lrs, lr)) {
          let lr_index = object_property_get(lrs, lr);
          if (lr_index + group_count > count) {
            w = true;
          }
        }
        return w;
      }
    });
    if (!added) {
      break;
    }
  }
  return {
    atoms,
    definitions,
    inverted,
  };
}
