import { list_get } from "./list_get.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { string_chunk } from "./string_chunk.mjs";
export function app_ceb_correct_get(answer, chunk_size, index) {
  let correct_choices = string_chunk(answer, chunk_size);
  return string_case_lower(list_get(correct_choices, index));
}
