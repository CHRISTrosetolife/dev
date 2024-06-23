import { app_gs_conversation_witness_wrong } from "./app_gs_conversation_witness_wrong.mjs";
import { list_without } from "./list_without.mjs";
import { app_gs_objection_ids } from "./app_gs_objection_ids.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_get } from "./list_get.mjs";
import { string_split_underscore } from "./string_split_underscore.mjs";
import { app_gs_bible_chapter_prefix } from "./app_gs_bible_chapter_prefix.mjs";
import { function_run } from "./function_run.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_pop } from "./list_pop.mjs";
import { each } from "./each.mjs";
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
import { list_shuffle } from "./list_shuffle.mjs";
export async function app_gs_conversation_witness(menu_overlay, npc, map) {
  let objection_id_correct = list_last(npc.objections);
  let objection_ids = app_gs_objection_ids();
  let objection_ids_incorrect = list_without(
    objection_ids,
    objection_id_correct,
  );
  let choice_wrong = await choice_get(
    list_first(objection_ids_incorrect),
    () => {
      app_gs_conversation_witness_wrong(npc, map, menu_overlay);
    },
  );
  let choice_correct = await choice_get(async () => {
    list_pop(npc.objections);
    await app_gs_conversation_gospel(menu_overlay, npc, map);
  });
  app_gs_conversation_npc(menu_overlay, npc, choice_correct.objection_text);
  let div_player = app_gs_conversation_player_prompt(
    menu_overlay,
    string_combine_multiple(["Tell ", npc.name, ": "]),
  );
  let choices = [choice_wrong, choice_correct];
  list_shuffle(choices);
  each(choices, (choice) => {
    html_button_width_full_text_click(
      div_player,
      choice.answer_text,
      choice.on_click,
    );
  });
  async function choice_get(objection_id, on_click) {
    let [book_id, chapter, verse_index, objection_index] =
      string_split_underscore(objection_id);
    let book_name = bible_books_prefix_to_name()[string_case_upper(book_id)];
    chapter = integer_parse(chapter);
    verse_index = integer_parse(verse_index);
    objection_index = integer_parse(objection_index);
    let chapter_id = number_pad(chapter, 2);
    let verses = await function_run(
      string_combine_multiple([
        app_gs_bible_chapter_prefix(),
        book_id,
        chapter_id,
      ]),
      [],
    );
    let verse = list_get(verses, verse_index);
    let objection = list_get(verse.objections, objection_index);
    let answer_verses = list_slice(
      verses,
      verse_index,
      verse_index + objection.count,
    );
    let { text: objection_text } = objection;
    let first = list_first(answer_verses);
    let { verse_number: verse_number_first } = first;
    let last = list_last(answer_verses);
    let { verse_number: verse_number_last } = last;
    let answer_texts = list_map_property(answer_verses, "text");
    let answer = list_join_space(answer_texts);
    let choice_text = string_combine_multiple([
      "📖 ",
      book_name,
      " ",
      chapter,
      ":",
      verse_number_first,
      first !== last ? "-" + verse_number_last : "",
      " - ",
      answer,
    ]);
    let choice_correct = {
      objection_text,
      answer_text: choice_text,
      on_click: on_click,
    };
    return choice_correct;
  }
}
