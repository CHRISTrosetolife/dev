import { list_sort_map } from "./list_sort_map.mjs";
import { app_language_2_key_to } from "./app_language_2_key_to.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each_index } from "./each_index.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_concat } from "./list_concat.mjs";
import { json_to } from "./json_to.mjs";
import { app_language_2_words_get } from "./app_language_2_words_get.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { html_localhost_is } from "./html_localhost_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_group_get(context) {
  let { language_learn, language_fluent } = context;
  let group = object_property_get(context, "group");
  if (html_localhost_is()) {
    if (false) {
      group = [
        [
          ["o", "oh"],
          ["o", "yes"],
          ["o", "or"],
          ["dili", "no"],
          ["dili", "not"],
          ["wala", "left"],
        ],
      ];
    }
  }
  let flat = list_flatten(group);
  let words = app_language_2_words_get(context);
  list_sort_map(flat, (f) => {
    let key = json_to(list_concat(f, [language_learn]));
    return object_property_exists(words, key) &&
      object_property_get(object_property_get(words, key), "learning") === true
      ? 0
      : 1;
  });
  let chunked = list_chunk(flat, 24);
  let mapped = list_map(chunked, (chunk) =>
    list_concat(
      list_map(chunk, (pair) => ({
        question: list_first(pair),
        answer: list_second(pair),
        language: language_learn,
      })),
      list_map(chunk, (pair) => ({
        question: list_second(pair),
        answer: list_first(pair),
        language: language_fluent,
      })),
    ),
  );
  let group_flat = list_flatten(mapped);
  each_index(group_flat, (c, index) => {
    object_property_set(c, "index", index);
    let c_key = app_language_2_key_to(c);
    object_property_set(c, "key", c_key);
  });
  if (html_localhost_is()) {
    if (true) {
    }
  }
  return {
    words,
    group_flat,
  };
}
