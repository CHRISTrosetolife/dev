import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
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
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 0;
  let group_count = 8;
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  let atom = list_first(group);
  let mapped = list_map(atom, list_first);
  let language_code = "fil-PH";
  let voice = "Standard-A";
  let text = "sa";
  const file_path = gcloud_audio_path(language_code, text, voice);
  let output_path = folder_gitignore_path(file_path);
  await gcloud_tts(language_code, voice, text, output_path);
  await each_async(mapped, async (m) => {
    log(output_path);
    let { created } = await gcloud_tts(language_code, voice, m, output_path);
    if (created) {
      await storage_upload_file(output_path, file_path);
      log("uploaded");
    }
  });
  return mapped;
  let group_index = 0;
  if (0) await storage_upload_object(group, ceb_group_path(group_index));
  return group;
}
