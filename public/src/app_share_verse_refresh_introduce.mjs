import { url_bible_songs } from "./url_bible_songs.mjs";
import { me_email } from "./me_email.mjs";
import { app_share_verse_refresh_phone } from "./app_share_verse_refresh_phone.mjs";
import { me_location } from "./me_location.mjs";
import { me_age } from "./me_age.mjs";
import { emoji_wrap_music } from "./emoji_wrap_music.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_share_verse_refresh_introduce() {
  let email = string_combine_multiple([
    app_share_verse_refresh_phone(),
    " 📬 Here is my email: ",
    me_email(),
    " 📧 ",
  ]);
  let v = [
    string_combine_multiple([
      app_share_verse_refresh_greet(),
      " I believe Christ died ✝️ , was buried 🪨 and rose ⬆️ to life ⛪ . I am a servant of God.",
    ]),
    string_combine_multiple([
      "My parents named me Jared Mathis. I have a wife. God called me to preach 🗣 the gospel ✝️.",
      emoji_wrap_music("I sing 🎤️ and play 🎹 Bible songs"),
      " . I am ",
      me_age(),
      " years old. ",
    ]),
    string_combine_multiple([me_location(), ". "]),
    "",
    emoji_wrap_music(
      string_combine_multiple([
        "Here are my Bible song videos: ",
        url_bible_songs(),
      ]),
    ),
  ];
  return v;
}
