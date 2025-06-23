import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(input) {
  let output = null;
  if (($c, input === "hi")) {
    output = app_share_verse_refresh_greet();
  }
  return output;
}
