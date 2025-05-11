import { list_remove_last } from "./list_remove_last.mjs";
import { list_remove } from "./list_remove.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_tile_overlay_add } from "./app_gs_tile_overlay_add.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_gs_npc_new(game, tile_choices, objections) {
  let tile = list_remove_last(tile_choices);
  let npc = app_gs_tile_overlay_add(tile, "npc");
  npc.direction = "down";
  npc.character = list_random_item(game_img_list_male());
  let choices = bible_names_men();
  list_remove(choices, game.player.name);
  npc.name = list_random_item(choices);
  npc.conversation_count = 0;
  npc.gospel_share = false;
  npc.christian = false;
  object_merge(npc, {
    objections,
  });
  npc.conversation_wait_until = 0;
}
