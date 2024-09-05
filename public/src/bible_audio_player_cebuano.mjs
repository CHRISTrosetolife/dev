import { bible_audio_player_generic } from "./bible_audio_player_generic.mjs";
import { folder_unzip } from "./folder_unzip.mjs";
import { bible_audio_player_cebuano_path } from "./bible_audio_player_cebuano_path.mjs";
import { each_async } from "./each_async.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_audio_player_cebuano() {
  let p = bible_audio_player_cebuano_path();
  await folder_unzip(p);
  let folders = ["CEBRPVN1DA", "CEBRPVN2DA"];
  await each_async(folders, async (download_folder) => {
    await bible_audio_player_generic(p, download_folder, tautology);
  });
}
