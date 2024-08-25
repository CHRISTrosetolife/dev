import { log } from "./log.mjs";
import { folder_read_each } from "./folder_read_each.mjs";
export async function bible_audio_player_english_nt() {
  let p = "..\\bible\\english\\ENGESVN2DA";
  await folder_read_each(p, ".mp3", async (item) => {
    log({});
  });
}
