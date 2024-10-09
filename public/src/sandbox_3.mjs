import { lg_definitions } from "./lg_definitions.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
export async function sandbox_3() {
  let dictionary = await lg_definitions();
  let words = await bible_words_eng_score();
  list_adder((la) => {});
}
