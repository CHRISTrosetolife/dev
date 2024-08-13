import { list_shuffle } from "./list_shuffle.mjs";
import { list_shuffle_halves } from "./list_shuffle_halves.mjs";
import { list_copy } from "./list_copy.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_language_quiz_settings(atoms, chunk_sizes) {
  let concat = list_concat_multiple(atoms);
  let copy = list_copy(concat);
  list_shuffle(copy);
  let result = list_adder((la) =>
    each(chunk_sizes, (chunk_size) =>
      each([true, false], (forwards) => {
        let scrambled = list_copy(copy);
        list_shuffle_halves(scrambled);
        each(scrambled, (pair) =>
          la({
            pair,
            chunk_size,
            forwards,
          }),
        );
      }),
    ),
  );
  return result;
}
