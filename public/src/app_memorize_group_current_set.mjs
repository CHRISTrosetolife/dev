import { each_range } from "./each_range.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function app_memorize_group_current_set(context, g) {
  context.group_current = g;
  let repeats = [];
  each_range(5, (item) => {});
  if (equal(list_size(context.group_current), 1)) {
    context.patterns = [
      "1",
      "110",
      "10",
      "01",
      "01001",
      "001",
      "0",
      "0",
      "0",
      "0",
    ];
  } else {
    context.patterns = ["1", "10", "0", "0", "0", "0"];
  }
  context.patterns_length = list_size(context.patterns);
  context.verse_index = 0;
  context.token_index = 0;
  context.pattern_index = 0;
  context.mistakes = false;
}
