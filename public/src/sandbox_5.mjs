import { log } from "./log.mjs";
import { list_wait } from "./list_wait.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_map } from "./list_map.mjs";
import { grace_facebook_data_messages_jared_cache } from "./grace_facebook_data_messages_jared_cache.mjs";
export async function sandbox_5() {
  let v4 = await grace_facebook_data_messages_jared_cache();
  let v = list_map(v4, html_parse);
  let v2 = await list_wait(v);
  log({
    v2,
  });
}
