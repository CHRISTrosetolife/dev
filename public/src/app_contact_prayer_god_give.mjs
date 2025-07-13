import { app_contact_phrase_amen } from "./app_contact_phrase_amen.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_contact_prayer_god_give(request) {
  let v = string_combine_multiple([
    "God, if You desire, please give ",
    request,
    app_contact_phrase_amen(),
  ]);
  return v;
}
