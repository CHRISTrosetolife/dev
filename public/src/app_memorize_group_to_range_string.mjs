import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
export function app_memorize_group_to_range_string(context, g) {
  let first_verse_index = list_first(g);
  let first_verse = list_get(context.verses, first_verse_index);
  let { verse_number: first_verse_number } = first_verse;
  let first_number = first_verse_number;
  let last_verse_index = list_last(g);
  let last_verse = list_get(context.verses, last_verse_index);
  let { verse_number: last_verse_number } = last_verse;
  let last_number = last_verse_number;
  let result;
  if (first_number === last_number) {
    result = first_number;
  } else {
    result = string_combine_multiple([first_number, " - ", last_number]);
  }
  return result;
}
