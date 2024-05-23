import { equal_by } from "./equal_by.mjs";
import { each_range } from "./each_range.mjs";
import { ceb_bible_words_definitions } from "./ceb_bible_words_definitions.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_any } from "./list_any.mjs";
import { list_first } from "./list_first.mjs";
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
  let atom_result = [];
  each_range(atom_count, () => {
    for (let p of pairs) {
      if (list_any(atom_result, (a) => equal_by(a, p, list_first))) {
        continue;
      }
    }
  });
  return pairs;
}
