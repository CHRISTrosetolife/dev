export function app_gs_npc_conversation_wait(map, npc) {
  return map.player.conversation_count < npc.conversation_wait_until;
}
