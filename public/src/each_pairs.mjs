import { each_pairs_index } from "./each_pairs_index.mjs";
export function each_pairs(list, lambda) {
  each_pairs_index(list, (current, next, index) => lambda(current, next));
}
