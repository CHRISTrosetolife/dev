import { list_scramble } from "./list_scramble.mjs";
import { list_copy } from "./list_copy.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_ceb_quiz_settings(atom) {
  let chunk_sizes = [3, 2, 1, 1];
  if (0) chunk_sizes = [1,1];
  let settings_choices = list_adder((la) =>
    each(chunk_sizes, (chunk_size) =>
      each([true, false], (forwards) => {
        let atom_copy = list_copy(atom);
        list_scramble(atom_copy);
        each(atom_copy, (pair) =>
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
