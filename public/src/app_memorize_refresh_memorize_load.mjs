import { list_index_ensure } from "./list_index_ensure.mjs";
import { list_get } from "./list_get.mjs";
import { error } from "./error.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_any } from "./list_any.mjs";
import { list_indices } from "./list_indices.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { log } from "./log.mjs";
import { app_memorize_version_code_get } from "./app_memorize_version_code_get.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { list_index } from "./list_index.mjs";
import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
import { html_hash } from "./html_hash.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { app_memorize_group } from "./app_memorize_group.mjs";
import { list_size } from "./list_size.mjs";
import { object_merge } from "./object_merge.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export async function app_memorize_refresh_memorize_load(context) {
  let save = app_memorize_save_get(context);
  let changed = object_property_exists_not(save, "chapter");
  let book_code = object_property_initialize(save, "book_code", "JHN");
  let chapter = object_property_initialize(save, "chapter", "19");
  let books = object_property_get(context, "books");
  let book = list_find_property_or(
    books,
    "book_code",
    book_code,
    list_first(books),
  );
  book_code = object_property_get(book, "book_code");
  let chapters = object_property_get(book, "chapters");
  if (list_includes_not(chapters, chapter)) {
    chapter = list_first(chapters);
  }
  object_merge(save, {
    book_code,
    chapter,
  });
  app_memorize_save(context);
  let load = true;
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  if (object_property_exists(context, "chapter_code")) {
    let existing = object_property_get(context, "chapter_code");
    if (chapter_code === existing) {
      load = false;
    }
  }
  object_merge(context, {
    chapter_code,
  });
  if (load) {
    let version_code = app_memorize_version_code_get(context);
    log({
      chapter_code,
      version_code,
    });
    let verses = await bible_storage_version_http_get(
      chapter_code,
      version_code,
    );
    if (list_empty_is(verses)) {
      console.error({
        chapter_code,
        version_code,
        message: "verses is empty",
      });
    }
    object_merge(context, {
      verses,
    });
    let verses_length = list_size(context.verses);
    let groups = app_memorize_group(verses_length);
    object_merge(context, {
      groups,
    });
    context.button_height = 7;
    let group_first = list_first(context.groups);
    log({
      group_first,
    });
    let group = object_property_get_or(save, "group_current", group_first);
    log({
      group,
      groups,
    });
    if (
      list_any(group, (i) => list_includes_not(list_indices(verses), i)) ||
      list_empty_is(group)
    ) {
      group = group_first;
    }
    let { verse_index, token_index } = save;
    verse_index = list_index_ensure(group, verse_index);
    let verse = list_get(group, verse_index);
    let { tokens } = verse;
    token_index = list_index_ensure(tokens, token_index);
    object_merge(save, {
      verse_index,
      token_index,
    });
    html_hash({
      verses: (value) => {
        group = app_memorize_groups_get(context, value);
      },
      pattern: (value) => {
        let save = app_memorize_save_get(context);
        save.pattern_index = list_index(context.patterns, value);
        app_memorize_save(context);
      },
    });
    app_memorize_group_current_set(context, group, changed);
  }
}
