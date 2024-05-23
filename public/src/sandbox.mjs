import { tautology } from "./tautology.mjs";
import { list_remove } from "./list_remove.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { equal_by } from "./equal_by.mjs";
import { each_range } from "./each_range.mjs";
import { ceb_bible_words_definitions } from "./ceb_bible_words_definitions.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_any } from "./list_any.mjs";
import { list_first } from "./list_first.mjs";
import { assert } from "./assert.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_length } from "./list_length.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let atom_count = 6;
  let limit = 75;
  let skip = 0;
  let ds = await ceb_bible_words_definitions(skip, limit);
  let pairs = list_adder((la) =>
    each(ds, (w) =>
      each(object_property_get(w, "definitions"), (d) =>
        la([object_property_get(w, "word"), d]),
      ),
    ),
  );
  let atoms = list_adder((la) => {
    while (list_any(pairs, tautology)) {
      let atom_result = [];
      each_range(atom_count, () => {
        let next;
        for (let p of pairs) {
          if (list_any(atom_result, (a) => equal_by(a, p, list_first))) {
            continue;
          }
          next = p;
          break;
        }
        assert(undefined_not_is, [next]);
        list_remove(pairs, p);
        list_add(atom_result, next);
      });
      if (equal(list_length(atom_result), atom_count)) {
        la(atom_result);
      }
    }
  });
  return pairs;
}
