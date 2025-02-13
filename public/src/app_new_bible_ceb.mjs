import { app_new_existing } from "./app_new_existing.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_new_bible_ceb() {
  let a = fn_name("app_bible_ceb");
  let v = await app_new_existing(a);
  return v;
}
