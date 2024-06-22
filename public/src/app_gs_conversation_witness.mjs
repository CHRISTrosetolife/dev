import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_convinced } from "./app_gs_phrase_convinced.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { app_gs_conversation_end } from "./app_gs_conversation_end.mjs";
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
import { app_gs_bible_chapter_jas01 } from "./app_gs_bible_chapter_jas01.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
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
  let objectables = list_adder((la) =>
    each(verses, (verse) => {
      each(verse.objections, (objection) => {
        la({
          verse,
          objection,
        });
      });
    }),
  );
  list_shuffle(objectables);
  let choice_wrong = choice_get(() => {
    app_gs_conversation_npc(
      menu_overlay,
      npc,
      string_combine_multiple([
        string_random_or_empty(
          string_combine_multiple([
            app_gs_phrase_thanks(),
            " for ",
            "your time",
            " ",
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
      ]),
    );
    let div_player = app_gs_conversation_player_prompt(menu_overlay, "");
    app_gs_conversation_end(div_player, menu_overlay);
  });
  let choice_correct = choice_get(() => {
    npc.objection_count--;
    app_gs_conversation_gospel(menu_overlay, npc);
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
  function choice_get(on_click) {
    let objectable_right = list_pop(objectables);
    let {
      verse: { index },
      objection,
    } = objectable_right;
    let { count, text: objection_text } = objection;
    let answer_verses = list_slice(verses, index, index + count);
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
