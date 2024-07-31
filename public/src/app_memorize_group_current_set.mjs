import { each_range } from "./each_range.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function app_memorize_group_current_set(context, g) {
  let save = object_property_initialize(context, "save", {});
  save.group_current = g;
  let repeats = [];
  each_range(5, (item) => {
    list_add(repeats, "0");
  });
  if (equal(list_size(save.group_current), 1)) {
    context.patterns = list_concat(
      ["1", "110", "10", "01", "01001", "001"],
      repeats,
    );
  } else {
    context.patterns = list_concat(["1", "10"], repeats);
  }
  context.patterns_length = list_size(context.patterns);
  context.verse_index = 0;
  context.token_index = 0;
  context.pattern_index = 0;
  context.mistakes = false;
}
