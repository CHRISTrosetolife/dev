import { list_filter_string_empty_not_is } from "./list_filter_string_empty_not_is.mjs";
import { list_filter_starts_with_not } from "./list_filter_starts_with_not.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { http_cache } from "./http_cache.mjs";
export async function names_male_generic(prefix) {
  let txt = await http_cache(
    string_combine_multiple([
      "https://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/names/",
      prefix,
      "male.txt",
    ]),
  );
  let lines = string_split_newline(txt);
  let filtered = list_filter_starts_with_not(lines, "#");
  let filtered2 = list_filter_string_empty_not_is(filtered);
  return filtered2;
}
