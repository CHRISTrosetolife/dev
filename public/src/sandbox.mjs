import { ceb_audio_upload } from "./ceb_audio_upload.mjs";
import { ceb_group_size } from "./ceb_group_size.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
export async function sandbox() {
  let limit = 75;
  let skip = 0;
  let group_count = ceb_group_size();
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  let taken = list_take(group, 4);
  await each_async(taken, async (atom) => {
    if (0)
      log({
        atom,
      });
    let mapped = list_map(atom, list_first);
    await each_async(mapped, async (text) => {
      await ceb_audio_upload(text);
    });
  });
  let group_index = 0;
  if (10) await storage_upload_object(group, ceb_group_path(group_index));
}
