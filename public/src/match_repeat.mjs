import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function match_repeat(repeat_times, repeated_item) {
  let v = match_sequence(
    list_map(range(repeat_times), function () {
      return repeated_item;
    }),
  );
  return v;
}
