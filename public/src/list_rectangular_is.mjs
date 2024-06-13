import { list_size } from "./list_size.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_all } from "./list_all.mjs";
import { list_first } from "./list_first.mjs";
export function list_rectangular_is(io) {
  assert(list_is, [io]);
  let first = list_first(io);
  let length = list_size(first);
  let same = list_all(io, (row) => equal(list_size(row), length));
  return same;
}
