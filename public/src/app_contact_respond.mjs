import { list_difference } from "./list_difference.mjs";
import { log } from "./log.mjs";
import { app_contact_separate } from "./app_contact_separate.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_to_lookup_keys } from "./list_to_lookup_keys.mjs";
import { function_result_path } from "./function_result_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_file_path_download } from "./storage_file_path_download.mjs";
import { app_contact_alphabet } from "./app_contact_alphabet.mjs";
import { string_only } from "./string_only.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { match_fill } from "./match_fill.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { app_contact_respond_choices } from "./app_contact_respond_choices.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_from } from "./json_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_contact_respond(input) {
  let json = await storage_file_path_download(
    function_result_path(fn_name("english_words_dictionary_object")),
  );
  let { words } = json_from(json);
  let words_lower = list_map(words, string_case_lower);
  words_lower = list_difference(words_lower, ["g", "d", "n"]);
  list_add_multiple(words_lower, ["god", "greetings", "today"]);
  let words_lookup = list_to_lookup_keys(words_lower);
  let lower = string_case_lower(input);
  let alphabet = app_contact_alphabet();
  let joined = string_only(lower, alphabet);
  let tokens = string_split_space(joined);
  let filtered = list_filter(tokens, string_empty_not_is);
  each(filtered, function (w) {
    let v = object_property_exists(words_lookup, w);
    if (!v) {
      let result = [];
      let r = app_contact_separate(words_lower, w, result);
      log({
        r,
        w,
      });
    }
  });
  let choices = app_contact_respond_choices();
  let { data, match } = match_fill(filtered, choices);
  let outputs = object_property_get_or(data, "outputs", []);
  let valid = object_property_get_or(data, "valid", true);
  let output = !match || !valid ? null : list_join_space(outputs);
  let v3 = {
    output,
    valid,
  };
  return v3;
}
