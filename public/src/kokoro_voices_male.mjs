import { string_split_comma_space } from "./string_split_comma_space.mjs";
export function kokoro_voices_male() {
  return string_split_comma_space(
    "am_adam, am_echo, am_eric, am_fenrir, am_liam, am_michael, am_onyx, am_puck",
  );
}
