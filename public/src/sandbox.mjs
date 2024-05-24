import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { ceb_audio_voices } from "./ceb_audio_voices.mjs";
import { ceb_audio_language_code } from "./ceb_audio_language_code.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { gcloud_tts } from "./gcloud_tts.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { storage_upload_file } from "./storage_upload_file.mjs";
import { each_index_async } from "./each_index_async.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 0;
  let group_count = 8;
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  return atoms;
  let group = list_take(atoms, group_count);
  let taken = list_take(group, 2);
  await each_async(taken, async (atom) => {
    log({
      atom,
    });
    let mapped = list_map(atom, list_first);
    let language_code = ceb_audio_language_code();
    let voices = ceb_audio_voices();
    await each_async(mapped, async (text) => {
      await each_index_async(voices, async (voice, voice_index) => {
        let file_path = ceb_audio_path(voice_index, text);
        let output_path = folder_gitignore_path(file_path);
        log(output_path);
        let { created } = await gcloud_tts(
          language_code,
          voice,
          text,
          output_path,
        );
        if (created) {
          await storage_upload_file(output_path, file_path);
          log("uploaded");
        }
      });
    });
  });
  let group_index = 0;
  if (0) await storage_upload_object(group, ceb_group_path(group_index));
  return group;
}
