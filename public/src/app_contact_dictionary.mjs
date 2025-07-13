import { list_to_lookup_keys } from "./list_to_lookup_keys.mjs";
import { app_contact_adds } from "./app_contact_adds.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_contact_removes } from "./app_contact_removes.mjs";
import { list_difference } from "./list_difference.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { json_from } from "./json_from.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_result_path } from "./function_result_path.mjs";
import { storage_file_path_download } from "./storage_file_path_download.mjs";
export async function app_contact_dictionary() {
  let json = await storage_file_path_download(
    function_result_path(fn_name("english_words_dictionary_object")),
  );
  let { words } = json_from(json);
  let list = list_map(words, string_case_lower);
  list = list_difference(list, app_contact_removes());
  list_add_multiple(list, await app_contact_adds());
  let lookup = list_to_lookup_keys(list);
  return {
    lookup,
    list,
  };
}
