import { app_tgl } from "./app_tgl.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_el() {
  let language_learn = "el";
  let language_fluent = "en";
  await app_language_2(app_tgl, language_learn, language_fluent);
}
