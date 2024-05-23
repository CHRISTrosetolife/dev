import { gcloud_tts } from "./gcloud_tts.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { each_async } from "./each_async.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 0;
  let group_count = 8;
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  let atom = list_first(group);
  let mapped = list_map(atom, list_first);
  await each_async(mapped, async (m) => {
    let language_code = "fil-PH-Standard-A";
    let output_path = `audio/${string_encoded_to(m)}/${language_code}`;
    return output_path;
    gcloud_tts;
  });
  return mapped;
  let group_index = 0;
  if (0) await storage_upload_object(group, ceb_group_path(group_index));
  return group;
}
