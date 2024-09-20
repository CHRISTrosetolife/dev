import { string_size } from "./string_size.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { app_language_correct_get } from "./app_language_correct_get.mjs";
import { app_language_answer_partial } from "./app_language_answer_partial.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { string_chunk } from "./string_chunk.mjs";
import { equal_not } from "./equal_not.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { number_min } from "./number_min.mjs";
import { add } from "./add.mjs";
import { string_substring } from "./string_substring.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than } from "./greater_than.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_language_alternatives_partial_matches_nexts(
  answer,
  chunk_size,
  index,
  alternatives,
) {
  let correct_choices = string_chunk(answer, chunk_size);
  let answer_partial = app_language_answer_partial(answer, chunk_size, index);
  let matches = list_filter(alternatives, (a) =>
    and(
      string_starts_with(a, answer_partial),
      greater_than(string_size(a), index),
    ),
  );
  matches = list_map_lower(matches);
  let ci = chunk_size * index;
  let nexts = list_map(matches, (a) =>
    string_substring(
      a,
      ci,
      add(ci, number_min(chunk_size, string_size(a) - ci)),
    ),
  );
  let correct;
  if (greater_than_equal(index, list_size(correct_choices))) {
    correct = null;
  } else {
    correct = app_language_correct_get(answer, chunk_size, index);
  }
  nexts = list_filter(nexts, (a) => equal_not(a, correct));
  nexts = list_unique(nexts);
  return nexts;
}
