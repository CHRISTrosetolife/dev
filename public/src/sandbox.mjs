import { bible_chapter } from "./bible_chapter.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { bible_books } from "./bible_books.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { equal_json } from "./equal_json.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
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
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert } from "./assert.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
export async function sandbox() {
  let index = 0;
  await each_index_async(
    await bible_books("engbsb"),
    async (book_name, book_index) => {
      let chapters = await bible_chapters("engbsb", book_name);
      await each_async(chapters, async (chapter_name) => {
        let bible_folders = ["engbsb", "engBBE", "eng-asv", "engasvbt"];
        await bible_chapter(chapter_name);
      });
    },
  );
  return;
  let group_index = 0;
  let limit = 150;
  let skip = 0;
  let group_count = ceb_group_size();
  let { atoms, definitions: definitions_all } =
    await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  if (0) {
    group = list_take(group, 4);
  }
  await each_async(group, async (atom) => {
    if (0) {
      log({
        atom,
      });
    }
    let mapped = list_map(atom, list_first);
    await each_async(mapped, async (text) => {
      await ceb_audio_upload(text);
    });
  });
  let words = list_adder_unique((la) =>
    each(atoms, (a) => each(a, (pair) => la(list_first(pair)))),
  );
  let definitions = {};
  each(words, (w) =>
    object_property_set(
      definitions,
      w,
      list_single(list_filter(definitions_all, (d) => d.word === w))
        .definitions,
    ),
  );
  let inverted = {};
  each_object(definitions, (word, word_definitions) =>
    each(word_definitions, (wd) => {
      let words = object_property_initialize(inverted, wd, []);
      list_add(words, word);
    }),
  );
  let result_new = {
    group,
    definitions,
    inverted,
  };
  let storage_path = ceb_group_path(group_index);
  let existing_path = folder_gitignore_path(storage_path);
  if (10) {
    if (0) {
      await storage_upload_object(result_new, storage_path);
    }
    await file_overwrite_json(existing_path, result_new);
  }
  let existing = await file_read_json(existing_path);
  assert(equal_json, [result_new, existing]);
}
