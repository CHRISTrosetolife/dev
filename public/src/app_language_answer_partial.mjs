import { string_size } from "./string_size.mjs";
import { number_min } from "./number_min.mjs";
import { string_take } from "./string_take.mjs";
export function app_language_answer_partial(answer, chunk_size, index) {
  return string_take(
    answer,
    number_min(index * chunk_size, string_size(answer)),
  );
}
