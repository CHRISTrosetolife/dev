import { http_cache } from "./http_cache.mjs";
export async function names_male() {
  await http_cache(
    "https://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/names/male.txt",
  );
}
