import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_but(books, c) {
  return list_take(books, list_size(books) - c);
}
