import { random } from "./random.mjs";
import { floor } from "./floor.mjs";
export function list_random_index(list) {
  return floor(random() * list.length);
}
