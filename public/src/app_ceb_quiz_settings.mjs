import { log } from "./log.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_scramble_halves } from "./list_scramble_halves.mjs";
import { list_copy } from "./list_copy.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_ceb_quiz_settings(atoms, chunk_sizes) {
  let concat = list_concat(atoms);
  log({
    atoms,
    concat,
  });
  let settings_choices = list_adder((la) =>
    each(chunk_sizes, (chunk_size) =>
      each([true, false], (forwards) => {
        let concat_copy = list_copy(concat);
        list_scramble_halves(concat_copy);
        each(concat_copy, (pair) =>
          la({
            pair,
            chunk_size,
            forwards,
          }),
        );
      }),
    ),
  );
  return settings_choices;
}
