export function app_gs_npc_conversation_wait(context, npc) {
  return context.game.player.conversation_count < npc.conversation_wait_until;
}
