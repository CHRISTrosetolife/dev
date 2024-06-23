import { app_gs_conversation_witness_choice } from "./app_gs_conversation_witness_choice.mjs";
import { app_gs_conversation_witness_wrong } from "./app_gs_conversation_witness_wrong.mjs";
import { list_without } from "./list_without.mjs";
import { app_gs_objection_ids } from "./app_gs_objection_ids.mjs";
import { list_pop } from "./list_pop.mjs";
import { each } from "./each.mjs";
import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
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
    return await app_gs_conversation_witness_choice(objection_id, on_click);
  }
}
