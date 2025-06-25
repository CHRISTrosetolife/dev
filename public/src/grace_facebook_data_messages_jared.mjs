import { list_wait } from "./list_wait.mjs";
import { file_read } from "./file_read.mjs";
import { list_map } from "./list_map.mjs";
import { string_includes_multiple } from "./string_includes_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { grace_facebook_data_htmls_cache } from "./grace_facebook_data_htmls_cache.mjs";
export async function grace_facebook_data_messages_jared() {
  let v = await grace_facebook_data_htmls_cache();
  let conversations = [
    "jama_122103294650748074",
    "jaredmathis_3001988360102013",
  ];
  let v2 = list_filter(v, function (s) {
    let v3 = string_includes_multiple(s, conversations);
    return v3;
  });
  let v6 = list_map(v2, file_read);
  let v4 = await list_wait(v6);
  return v4;
}
