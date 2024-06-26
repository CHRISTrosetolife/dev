import { app_language_atom_count } from "./app_language_atom_count.mjs";
import { list_size } from "./list_size.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_take } from "./list_take.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { each } from "./each.mjs";
import { ceb_bible_words_definitions_pairs } from "./ceb_bible_words_definitions_pairs.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove } from "./list_remove.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each_range } from "./each_range.mjs";
import { list_any } from "./list_any.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_second } from "./list_second.mjs";
export async function ceb_bible_words_definitions_atoms(skip, limit) {
  let take_count = 16;
  let atom_count = app_language_atom_count();
  let { pairs, definitions } = await ceb_bible_words_definitions_pairs(
    skip,
    limit,
  );
  let atoms = list_adder((la) => {
    let previous = [];
    while (list_empty_not_is(pairs)) {
      let atom_result = [];
      each_range(atom_count, (index) => {
        if (list_empty_is(pairs)) {
          return;
        }
        let next;
        for (let p of pairs) {
          let c = false;
          let concat = list_concat([atom_result], previous);
          let lists = list_take(concat, take_count);
          each(lists, (list) => {
            for (let eq of [list_first, list_second]) {
              if (list_any(list, (a) => equal_by(a, p, eq))) {
                c = true;
              }
            }
          });
          if (c) {
            continue;
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
      }
      list_add_beginning(previous, atom_result);
    }
  });
  return {
    atoms,
    definitions,
  };
}
