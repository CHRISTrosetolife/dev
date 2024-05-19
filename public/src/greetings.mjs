import { greetings_word_get } from "./greetings_word_get.mjs";
export function greetings(name) {
  let greeting_word = greetings_word_get();
  return greeting_word + " " + name;
}
