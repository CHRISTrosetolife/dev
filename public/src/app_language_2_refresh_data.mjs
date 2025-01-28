import { app_language_2_word_index } from "./app_language_2_word_index.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_take } from "./list_take.mjs";
import { each } from "./each.mjs";
import { list_sort } from "./list_sort.mjs";
import { object_values } from "./object_values.mjs";
export function app_language_2_refresh_data(context) {
  app_language_2_button_back_home(context);
  let { root, words } = context;
  let values_all = object_values(words);
  list_sort(values_all, app_language_2_word_index);
  each(list_take(values_all, 200), (item) => {
    html_div_text(root, json_format_to(item));
  });
}
