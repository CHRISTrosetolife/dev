import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { html_p } from "./html_p.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag_language } from "./html_flag_language.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { object_values } from "./object_values.mjs";
import { object_properties_select } from "./object_properties_select.mjs";
import { each_index } from "./each_index.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { json_to } from "./json_to.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_properties_empty_is } from "./object_properties_empty_is.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_language_initialize } from "./app_language_initialize.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export async function app_language2(app_fn, language_learn, language_fluent) {
  let body = await app_language_initialize();
  let context = {
    app_fn,
    language_learn,
    language_fluent,
  };
  storage_local_initialize(app_fn, "words", {});
  await app_language_group_index_changed_inner(context, 0);
  let group = object_property_get(context, "group");
  let flat = list_adder((la) => {
    each(group, (atom) => {
      each(atom, la);
    });
  });
  let concated = list_concat(
    list_map(flat, (pair) => ({
      question: list_first(pair),
      answer: list_second(pair),
      language: language_learn,
    })),
    list_map(flat, (pair) => ({
      question: list_second(pair),
      answer: list_first(pair),
      language: language_fluent,
    })),
  );
  let properties = ["question", "answer", "language"];
  each_index(concated, (c, index) => {
    object_property_set(c, "index", index);
    object_property_set(
      c,
      "key",
      json_to(object_properties_select(c, properties)),
    );
  });
  let words = storage_local_get(app_fn, "words", {});
  if (object_properties_empty_is(words)) {
    let word = list_first(concated);
    object_property_set(words, object_property_get(word, "key"), {
      learned: false,
      word,
    });
    storage_local_set(app_fn, "words", words);
  }
  html_clear_scroll_top_centered(body);
  let values = object_values(words);
  let unlearned = list_filter_property(values, "learned", false);
  if (list_empty_not_is(unlearned)) {
    list_sort_property(unlearned, "index");
    let u = list_first(unlearned);
    let word = object_property_get(u, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    html_p_text(body, "Remember this:");
    app_language2_word(body, "Question", language, question);
    app_language2_word(
      body,
      "Answer",
      language === language_learn ? language_fluent : language_learn,
      answer,
    );
    html_button_next(body, () => {
      object_property_set(u, "learned", true);
      object_property_set(u, "wait", 0);
      object_property_set(u, "gap", 0);
      storage_local_set(app_fn, "words", words);
    });
  } else {
  }
  function app_language2_word(body, text, language, rememeber) {
    let r = html_p_text(body, string_combine_multiple([text, ": "]));
    let q = html_p(body);
    html_flag_language(q, language);
    html_span_text(q, string_combine_multiple([" ", rememeber]));
    html_style_bold(q);
  }
}
