import { greetings_words } from "./greetings_words.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function greetings_word_get() {
  return list_random_item(greetings_words());
}
