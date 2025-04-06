import { emoji_music_up } from "./emoji_music_up.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function emoji_wrap_music(praise) {
  let v = string_combine_multiple([emoji_music_up(), praise, " 🎶"]);
  return v;
}
