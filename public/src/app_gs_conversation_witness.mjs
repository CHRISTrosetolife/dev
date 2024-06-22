import { function_run } from "./function_run.mjs";
import { number_pad } from "./number_pad.mjs";
import { each_index_only } from "./each_index_only.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { app_gs_verses_get } from "./app_gs_verses_get.mjs";
import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { app_gs_npc_conversation_wait_count } from "./app_gs_npc_conversation_wait_count.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_gs_phrase_you_have } from "./app_gs_phrase_you_have.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_convinced } from "./app_gs_phrase_convinced.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
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
import { object_merge } from "./object_merge.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
export function app_gs_conversation_witness(menu_overlay, npc, map) {
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
  list_shuffle(objection_ids);
  let choice_wrong = choice_get(() => {
    npc.conversation_wait_until =
      map.player.conversation_count + app_gs_npc_conversation_wait_count();
    let npc_text = string_combine_multiple([
      string_random_or_empty(
        string_combine_multiple([
          app_gs_phrase_thanks(),
          " for ",
          list_random_item([
            "your time",
            string_combine_multiple([
              "what ",
              app_gs_phrase_you_have(),
              " ",
              list_random_item([
                string_combine_multiple([
                  "said",
                  string_random_or_empty(" to me"),
                ]),
                string_combine_multiple([
                  "shared",
                  string_random_or_empty(" with me"),
                ]),
              ]),
            ]),
          ]),
          ". However, ",
        ]),
      ),
      app_gs_phrase_i_am(),
      " not ",
      string_random_or_empty("quite "),
      list_random_item([
        string_combine_multiple([
          string_random_or_empty("yet "),
          app_gs_phrase_convinced(),
        ]),
        string_combine_multiple([
          app_gs_phrase_convinced(),
          string_random_or_empty(", yet"),
        ]),
      ]),
      ".",
    ]);
    html_clear(menu_overlay);
    app_gs_conversation_npc_end(menu_overlay, npc, npc_text);
  });
  let choice_correct = choice_get(() => {
    npc.objection_count--;
    app_gs_conversation_gospel(menu_overlay, npc, map);
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
  async function choice_get(on_click) {
    let objection_id = list_pop(objection_ids);
    let [book_id, chapter, verse_index, objection_index] =
      list_split_underscore(objection_id);
    let chapter_id = number_pad(chapter);
    await function_run("app_gs_bible_chapter_");
    list_slice(verses, index, index + objection.count);
    let { verses: answer_verses, objection } = objectable;
    let { text: objection_text } = objection;
    let first = list_first(answer_verses);
    let last = list_last(answer_verses);
    let answer_texts = list_map_property(answer_verses, "text");
    let answer = list_join_space(answer_texts);
    let choice_text = string_combine_multiple([
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
    let choice_correct = {
      objection_text,
      answer_text: choice_text,
      on_click: on_click,
    };
    return choice_correct;
  }
}
