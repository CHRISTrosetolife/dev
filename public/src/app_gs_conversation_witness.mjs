import { list_remove_last } from "./list_remove_last.mjs";
import { html_button } from "./html_button.mjs";
import { app_gs_conversation_witness_choice } from "./app_gs_conversation_witness_choice.mjs";
import { app_gs_conversation_witness_wrong } from "./app_gs_conversation_witness_wrong.mjs";
import { list_without } from "./list_without.mjs";
import { app_gs_objection_ids } from "./app_gs_objection_ids.mjs";
import { each } from "./each.mjs";
import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export async function app_gs_conversation_witness(context, menu_overlay, npc) {
  let objection_id_correct = list_last(npc.objections);
  let objection_ids = app_gs_objection_ids();
  let objection_ids_incorrect = list_without(
    objection_ids,
    objection_id_correct,
  );
  let choice_wrong = await app_gs_conversation_witness_choice(
    list_first(objection_ids_incorrect),
    () => {
      app_gs_conversation_witness_wrong(context, npc, menu_overlay);
    },
  );
  let choice_correct = await app_gs_conversation_witness_choice(
    objection_id_correct,
    async () => {
      list_remove_last(npc.objections);
      await app_gs_conversation_gospel(context, menu_overlay, npc);
    },
  );
  app_gs_conversation_npc(menu_overlay, npc, choice_correct.objection_text);
  let div_player = app_gs_conversation_player_prompt(
    menu_overlay,
    string_combine_multiple(["Tell ", npc.name, ": "]),
  );
  let choices = [choice_wrong, choice_correct];
  list_shuffle(choices);
  each(choices, (choice) => {
    html_button(div_player, choice.answer_text, choice.on_click);
  });
}
