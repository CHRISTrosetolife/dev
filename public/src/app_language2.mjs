import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_language2(language_learn, language_fluent) {
  let body = html_style_default_initialize();
  let context = {
    language_learn,
    language_fluent,
  };
  await app_language_group_index_changed_inner(context, 0);
  let group = object_property_get(context, "group");
  list_concat(
    list_map(group, (pair) => ({
      question: list_first(pair),
      answer: list_second(pair),
      language: language_learn,
    })),
  );
}
