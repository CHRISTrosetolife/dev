import { bible_audio_download_mp3 } from "./bible_audio_download_mp3.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_download_openbible() {
  let prefix_url = "https://openbible.com/audio/";
  let v = "gilbert_books";
  let versions = ["hays_books", "souer_books", "gilbert_music_books"];
  await each_async(versions, async (version) => {
    let r = await bible_audio_download_mp3(prefix_url, version);
    log({
      r,
    });
  });
}
