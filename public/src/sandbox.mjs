import { ceb_bible_words_definitions } from "./ceb_bible_words_definitions.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 32;
  return await ceb_bible_words_definitions(skip, limit);
}
