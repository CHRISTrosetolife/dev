import { http_cache } from "./http_cache.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
export async function names_male() {
  let txt = await http_cache(
    "https://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/names/male.txt",
  );
  let lines = string_split_newline(txt);
  return txt;
}
