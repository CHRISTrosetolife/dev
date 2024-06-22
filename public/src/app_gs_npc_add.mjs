import { list_remove } from "./list_remove.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_tile_overlay_add } from "./app_gs_tile_overlay_add.mjs";
import { list_pop } from "./list_pop.mjs";
export function app_gs_npc_add(map, tile_choices) {
  let tile = list_pop(tile_choices);
  let npc = app_gs_tile_overlay_add(tile, "npc");
  npc.character = list_random_item(game_img_list_male());
  let choices = bible_names_men();
  list_remove(choices, map.player.name);
  npc.name = list_random_item(choices);
  npc.conversation_count = 0;
  npc.objection_count = 1;
}
