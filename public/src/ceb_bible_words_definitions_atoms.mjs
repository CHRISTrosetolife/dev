import { ceb_atom_count } from "./ceb_atom_count.mjs";
import { ceb_bible_words_definitions_pairs } from "./ceb_bible_words_definitions_pairs.mjs";
import { log } from "./log.mjs";
import { list_length } from "./list_length.mjs";
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
export async function ceb_bible_words_definitions_atoms(skip, limit) {
  let atom_count = ceb_atom_count();
  let pairs = await ceb_bible_words_definitions_pairs(skip, limit);
  let atoms = list_adder((la) => {
    while (list_empty_not_is(pairs)) {
      let atom_result = [];
      each_range(atom_count, () => {
        if (list_empty_is(pairs)) {
          return;
        }
        let next;
        for (let p of pairs) {
          if (list_any(atom_result, (a) => equal_by(a, p, list_first))) {
            continue;
          }
          next = p;
          break;
        }
        if (undefined_not_is(next)) {
          list_remove(pairs, next);
          list_add(atom_result, next);
        }
      });
      if (equal(list_length(atom_result), atom_count)) {
        la(atom_result);
      } else {
        log({
          atom_result,
        });
      }
    }
  });
  return atoms;
}
