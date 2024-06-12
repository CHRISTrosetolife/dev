import { equal } from "./equal.mjs";
import { list_all } from "./list_all.mjs";
import { list_length } from "./list_length.mjs";
import { list_first } from "./list_first.mjs";
export function list_rectangular_is(io) {
  let first = list_first(io);
  let length = list_length(first);
  let same = list_all(io, (row) => equal(list_length(row), length));
  return same;
}
