import { floor } from "./floor.mjs";
export function list_random_index(list) {
  return floor(Math.random() * list.length);
}
