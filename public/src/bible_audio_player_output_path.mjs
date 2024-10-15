import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_audio_player_output_path() {
  let output = string_combine_multiple([":\\"]);
  if (0) {
    output = "..\\bible\\english\\test";
  }
  return output;
}
