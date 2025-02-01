import { log } from "./log.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { each } from "./each.mjs";
import { storage_local_keys } from "./storage_local_keys.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let keys = storage_local_keys();
  each(keys, (k) => {
    if (string_starts_with(k, " ")) {
      let k_new = string_combine_multiple([fn_name("app_ceb2"), k]);
      log({
        k_new,
      });
    }
  });
  return;
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
