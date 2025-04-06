import { me_phone } from "./me_phone.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_share_verse_refresh_phone() {
  let v = string_combine_multiple([
    "📞 Here is my WhatsApp phone number: ",
    me_phone(),
    " ☎️",
  ]);
  return v;
}
