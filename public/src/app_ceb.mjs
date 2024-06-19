import { app_language } from "./app_language.mjs";
export async function app_ceb() {
  let from = "ceb";
  let to = "en";
  let app_fn = app_ceb;
  await app_language(app_fn, from, to);
}
