import { json_format_to } from "./json_format_to.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_take } from "./list_take.mjs";
import { each } from "./each.mjs";
import { app_language2_word_index } from "./app_language2_word_index.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { object_values } from "./object_values.mjs";
import { app_language2_button_back_home } from "./app_language2_button_back_home.mjs";
export function app_language2_refresh_data(context) {
  app_language2_button_back_home(context);
  let { root, words } = context;
  let values_all = object_values(words);
  let values = list_filter_property(values_all, "skip", false);
  list_sort(values, app_language2_word_index);
  each(list_take(values, 200), (item) => {
    html_div_text(root, json_format_to(item));
  });
}
