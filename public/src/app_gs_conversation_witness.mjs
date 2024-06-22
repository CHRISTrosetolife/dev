import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_merge } from "./object_merge.mjs";
import { each_index } from "./each_index.mjs";
import { app_gs_bible_chapter_jas01 } from "./app_gs_bible_chapter_jas01.mjs";
export function app_gs_conversation_witness(menu_overlay, npc) {
  let book_name = "James";
  let chapter = "1";
  let verses = app_gs_bible_chapter_jas01();
  each_index(verses, (item, index) => {
    object_merge(item, {
      index,
      book_name,
      chapter,
    });
  });
  let objectables = list_filter(verses, (v) => list_empty_not_is(v.objections));
  let objectable = list_random_item(objectables);
  let { index } = objectable;
  let objection = list_random_item(objectable.objections);
  let { count, text: object_text } = objection;
  let answer_verses = list_slice(verses, index, index + count);
  let first = list_first(answer_verses);
  let last = list_last(answer_verses);
  let answer_texts = list_map_property(answer_verses, "text");
  let answer = list_join_space(answer_texts);
  app_gs_conversation_npc(menu_overlay, npc, object_text);
  let div_player = app_gs_conversation_player_prompt(
    menu_overlay,
    string_combine_multiple(["Tell ", npc.name, ": "]),
  );
  let answer_text_button = string_combine_multiple([
    "📖 ",
    first.book_name,
    " ",
    first.chapter,
    ":",
    first.verse_number,
    first !== last ? "-" + last.verse_number : "",
    " - ",
    answer,
  ]);
  let answer_on_click = () => {
    npc.objection_count--;
    app_gs_conversation_gospel(menu_overlay, npc);
  };
  html_button_width_full_text_click(
    div_player,
    answer_text_button,
    answer_on_click,
  );
}
