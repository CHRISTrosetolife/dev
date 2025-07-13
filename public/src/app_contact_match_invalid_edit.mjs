import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_contact_match_invalid } from "./app_contact_match_invalid.mjs";
export function app_contact_match_invalid_edit(what_you_did, edit_to_say) {
  let v = app_contact_match_invalid(
    string_combine_multiple([
      "You ",
      what_you_did,
      ". Please edit your message to say what ",
      edit_to_say,
      ".",
    ]),
  );
  return v;
}
