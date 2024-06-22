import { list_join_underscore } from "./list_join_underscore.mjs";
import { each_index_only } from "./each_index_only.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_merge } from "./object_merge.mjs";
import { each_index } from "./each_index.mjs";
import { app_gs_verses_get } from "./app_gs_verses_get.mjs";
export function app_gs_objection_ids() {
  let verses = app_gs_verses_get();
  let book_name = "James";
  let book_id = "jas";
  let chapter = "1";
  each_index(verses, (item, index) => {
    object_merge(item, {
      index,
      book_name,
      chapter,
    });
  });
  let objection_ids = list_adder((la) =>
    each_index(verses, (verse, verse_index) => {
      each_index_only(verse.objections, (objection_index) => {
        la(
          list_join_underscore([
            book_id,
            chapter,
            verse_index,
            objection_index,
          ]),
        );
      });
    }),
  );
  return objection_ids;
}
