import { log } from "./log.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
