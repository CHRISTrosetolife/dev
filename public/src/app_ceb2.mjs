import { storage_local_keys } from "./storage_local_keys.mjs";
import { log } from "./log.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  let keys = storage_local_keys();
  log({
    keys,
  });
  return;
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
