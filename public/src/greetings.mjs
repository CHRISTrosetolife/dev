import { list_random_item } from "./list_random_item.mjs";
export function greetings(name) {
  let greeting_word = list_random_item(["hello", "hey", "howdy"]);
  return greeting_word + " " + name;
}
