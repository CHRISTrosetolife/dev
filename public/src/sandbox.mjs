import { ceb_group_path } from "./ceb_group_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_take } from "./list_take.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 0;
  let group_count = 8;
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  let group_index = 0;
  if (0) await storage_upload_object(group, ceb_group_path(group_index));
  return group;
}
