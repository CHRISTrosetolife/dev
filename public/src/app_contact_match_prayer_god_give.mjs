import { app_contact_match_amen } from "./app_contact_match_amen.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_contact_match_prayer_god_give(request) {
  let v = string_combine_multiple([
    "God, if You desire, please give ",
    request,
    app_contact_match_amen(),
  ]);
  return v;
}
