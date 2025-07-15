import { names_generate_generic } from "./names_generate_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function names_male_generic(fn, prefix) {
  let url = string_combine_multiple([
    "https://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/names/",
    prefix,
    "male.txt",
  ]);
  let filtered2 = await names_generate_generic(url, fn);
  return filtered2;
}
