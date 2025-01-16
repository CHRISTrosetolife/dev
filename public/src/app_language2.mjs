import { json_to } from "./json_to.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_initialize } from "./app_language_initialize.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_language2(language_learn, language_fluent) {
  let body = await app_language_initialize();
  let context = {
    language_learn,
    language_fluent,
  };
  await app_language_group_index_changed_inner(context, 0);
  let group = object_property_get(context, "group");
  let concated = list_concat(
    list_map(group, (pair) => ({
      question: list_first(pair),
      answer: list_second(pair),
      language: language_learn,
    })),
    list_map(group, (pair) => ({
      question: list_second(pair),
      answer: list_first(pair),
      language: language_fluent,
    })),
  );
  html_p_text(body, json_to(concated));
}
