import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(value) {
  let output;
  if (value === "hi") {
    output = app_share_verse_refresh_greet();
  }
  return output;
}
