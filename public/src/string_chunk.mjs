import { number_min } from "./number_min.mjs";
import { string_take } from "./string_take.mjs";
import { string_skip } from "./string_skip.mjs";
import { multiply } from "./multiply.mjs";
import { range } from "./range.mjs";
import { divide } from "./divide.mjs";
import { ceiling } from "./ceiling.mjs";
import { string_length } from "./string_length.mjs";
import { list_adder } from "./list_adder.mjs";
export function string_chunk(english, chunk_size) {
  return list_adder((la) => {
    let length = string_length(english);
    let adjusted = ceiling(divide(length, chunk_size));
    for (let i of range(adjusted)) {
      let scaled = multiply(i, chunk_size);
      let skipped = string_skip(english, scaled);
      let limit = string_length(skipped);
      let taken = string_take(skipped, number_min(chunk_size, limit));
      la(taken);
    }
  });
}
