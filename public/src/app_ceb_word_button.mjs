import { app_ceb_word_button_audio_none } from "./app_ceb_word_button_audio_none.mjs";
import { app_ceb_audio } from "./app_ceb_audio.mjs";
export async function app_ceb_word_button(root, cebuano) {
  let button = app_ceb_word_button_audio_none(root, cebuano);
  await app_ceb_audio(cebuano);
  return button;
}
