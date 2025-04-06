import { me_location } from "./me_location.mjs";
import { me_age } from "./me_age.mjs";
import { emoji_wrap_music } from "./emoji_wrap_music.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_share_verse_refresh_introduce() {
  let v = string_combine_multiple([
    app_share_verse_refresh_greet(),
    " My parents named me Jared Mathis. I believe Jesus died ✝️ , was buried 🪨 and rose ⬆️ to life ⛪ . I preach 🗣 the gospel ✝️. I have a wife. ",
    emoji_wrap_music("I sing 🎤️ and play 🎹 Bible songs"),
    " . I am ",
    me_age(),
    " years old. ",
    me_location(),
    ".",
  ]);
  return v;
}
