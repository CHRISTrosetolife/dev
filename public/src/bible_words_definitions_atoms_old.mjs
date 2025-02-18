import { list_add_first } from "./list_add_first.mjs";
import { log } from "./log.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
import { bible_words_definitions_pairs } from "./bible_words_definitions_pairs.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { log_json } from "./log_json.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { list_size } from "./list_size.mjs";
import { list_concat } from "./list_concat.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove } from "./list_remove.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each_range } from "./each_range.mjs";
import { list_any } from "./list_any.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_second } from "./list_second.mjs";
import { list_includes } from "./list_includes.mjs";
export async function bible_words_definitions_atoms_old(language) {
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
  let atoms = list_adder((la) => {
    let previous = [];
    while (list_empty_not_is(pairs)) {
      log({
        pairs: list_size(pairs),
      });
      let atom_result = [];
      each_range(atom_count, (index) => {
        if (list_empty_is(pairs)) {
          return;
        }
        let next;
        for (let p of pairs) {
          let c = false;
          let concat = list_concat([atom_result], previous);
          let lists = list_take_soft(concat, take_count);
          each(lists, (list) => {
            if (
              list_any(
                list,
                (a) =>
                  list_includes(
                    object_property_get(definitions, list_first(a)),
                    list_second(p),
                  ) ||
                  list_includes(
                    object_property_get(definitions, list_first(p)),
                    list_second(a),
                  ) ||
                  list_any(a, (ai) => list_any(p, (pi) => equal(ai, pi))),
              )
            ) {
              c = true;
            }
          });
          if (c) {
            continue;
          }
          if (0) {
            if (list_second(p) === "lord") {
              log_json({
                p,
                lists,
              });
            }
          }
          next = p;
          break;
        }
        if (index === subtract_1(atom_count)) {
          if (list_empty_is(atom_result)) {
            next = list_first(pairs);
          }
        }
        if (undefined_not_is(next)) {
          list_remove(pairs, next);
          list_add(atom_result, next);
        }
      });
      if (equal(list_size(atom_result), atom_count)) {
        la(atom_result);
        list_add_first(previous, atom_result);
      }
    }
  });
  return {
    atoms,
    definitions,
    inverted,
  };
}
