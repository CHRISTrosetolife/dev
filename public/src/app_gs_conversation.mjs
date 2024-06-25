import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_gs_conversation_wait } from "./app_gs_conversation_wait.mjs";
import { app_gs_npc_conversation_wait } from "./app_gs_npc_conversation_wait.mjs";
import { app_gs_conversation_npc_opening_text } from "./app_gs_conversation_npc_opening_text.mjs";
import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { assert } from "./assert.mjs";
export function app_gs_conversation(context, npc) {
  assert_arguments_length(arguments, 2);
  assert(greater_than_equal, [context.game.player.energy.conversation, 1]);
  let menu_overlay = app_gs_menu_overlay(context);
  context.game.player.conversation_count++;
  npc.conversation_count++;
  if (app_gs_npc_conversation_wait(context, npc)) {
    app_gs_conversation_wait(context, menu_overlay, npc);
  } else {
    let text = app_gs_conversation_npc_opening_text(context, npc);
    app_gs_conversation_npc_opening(context, menu_overlay, npc, text);
  }
}
