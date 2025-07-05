import { emojis_trinity } from "./emojis_trinity.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { emoji_wrap_music } from "./emoji_wrap_music.mjs";
export function app_share_praise() {
  let v = emoji_wrap_music(
    string_combine_multiple(["Praise the LORD our God ", emojis_trinity()]),
  );
  return v;
}
