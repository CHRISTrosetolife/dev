import { equal_json } from "./equal_json.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { each_range } from "./each_range.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function app_memorize_group_current_set(context, g, changed) {
  let save = app_memorize_save_get(context);
  if (
    equal_json(save.group_current, g) &&
    object_property_exists(save, "pattern_index")
  ) {
    save.pattern_index = save.pattern_index;
  } else {
    save.pattern_index = 0;
  }
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
  if (changed) {
    save.token_index = 0;
    save.verse_index = 0;
    save.mistakes = false;
  }
  app_memorize_save(context);
}
