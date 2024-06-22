import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { app_gs_conversation_root } from "./app_gs_conversation_root.mjs";
import { app_gs_phrase_doxology } from "./app_gs_phrase_doxology.mjs";
import { app_gs_phrase_worship } from "./app_gs_phrase_worship.mjs";
import { app_gs_phrase_jesus } from "./app_gs_phrase_jesus.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_speech_npc } from "./app_gs_conversation_speech_npc.mjs";
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
import { html_clear } from "./html_clear.mjs";
export function app_gs_conversation_gospel(menu_overlay, npc) {
  html_clear(menu_overlay);
  if (npc.objection_count === 0) {
    app_gs_conversation_speech_npc(
      menu_overlay,
      npc,
      string_combine_multiple([
        string_random_or_empty("Amen! "),
        string_random_or_empty(
          string_combine_multiple([app_gs_phrase_worship(), " "]),
        ),
        string_random_or_empty(
          string_combine_multiple([app_gs_phrase_doxology(), " "]),
        ),
        list_random_item([
          string_combine_multiple([
            "You have ",
            string_random_or_empty(
              string_combine_multiple([
                list_random_item(["fully", "completely"]),
                " ",
              ]),
            ),
            list_random_item(["convinced", "persuaded"]),
            " me",
            app_gs_phrase_exclaim_or_period(),
          ]),
          "Thank you for telling me about Jesus",
        ]),
        " ",
        string_combine_multiple([
          string_random_or_empty("Now "),
          "I believe ",
          list_random_item([
            string_combine_multiple(["in ", app_gs_phrase_jesus()]),
            string_combine_multiple([
              "that ",
              app_gs_phrase_jesus(),
              " ",
              list_random_item([
                string_combine_multiple([
                  string_random_or_empty(
                    string_combine_multiple([
                      "died",
                      string_random_or_empty(", was buried"),
                      " and ",
                    ]),
                  ),
                  "rose to life",
                  string_random_or_empty(
                    string_combine_multiple([
                      " with ",
                      list_random_item(["all my", "my whole"]),
                      " heart",
                    ]),
                  ),
                ]),
                string_combine_multiple([
                  "is ",
                  list_random_item([
                    string_combine_multiple([
                      "King",
                      string_random_or_empty(" of kings"),
                    ]),
                    string_combine_multiple([
                      "Lord",
                      string_random_or_empty(" of lords"),
                    ]),
                    "alive",
                    "reigning from on high",
                    string_combine_multiple([
                      "my ",
                      list_random_item([
                        string_combine_multiple([
                          "Savior",
                          string_random_or_empty(" and Lord"),
                        ]),
                        string_combine_multiple([
                          "Lord",
                          string_random_or_empty(" and Savior"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          "!",
        ]),
      ]),
    );
    app_gs_conversation_root(menu_overlay, npc);
  } else {
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
    let objectables = list_filter(verses, (v) =>
      list_empty_not_is(v.objections),
    );
    let objectable = list_random_item(objectables);
    let { index } = objectable;
    let objection = list_random_item(objectable.objections);
    let { count, text: object_text } = objection;
    let answer_verses = list_slice(verses, index, index + count);
    let first = list_first(answer_verses);
    let last = list_last(answer_verses);
    let answer_texts = list_map_property(answer_verses, "text");
    let answer = list_join_space(answer_texts);
    app_gs_conversation_speech_npc(menu_overlay, npc, object_text);
    let div_player = app_gs_conversation_player_prompt(
      menu_overlay,
      string_combine_multiple(["Tell ", npc.name, ": "]),
    );
    html_button_width_full_text_click(
      div_player,
      string_combine_multiple([
        "📖 ",
        first.book_name,
        " ",
        first.chapter,
        ":",
        first.verse_number,
        first !== last ? "-" + last.verse_number : "",
        " - ",
        answer,
      ]),
      () => {
        npc.objection_count--;
        app_gs_conversation_gospel(menu_overlay, npc);
      },
    );
  }
}
