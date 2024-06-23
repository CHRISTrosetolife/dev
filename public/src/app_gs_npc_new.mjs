import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { list_remove } from "./list_remove.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_tile_overlay_add } from "./app_gs_tile_overlay_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { integer_random } from "./integer_random.mjs";
export function app_gs_npc_new(map, tile_choices, objection_ids) {
  let objections = list_map(range(integer_random(1, 3)), (i) =>
    list_pop(objection_ids),
  );
  let tile = list_pop(tile_choices);
  let npc = app_gs_tile_overlay_add(tile, "npc");
  npc.character = list_random_item(game_img_list_male());
  let choices = bible_names_men();
  list_remove(choices, map.player.name);
  npc.name = list_random_item(choices);
  npc.conversation_count = 0;
  npc.objection_count = 1;
  npc.christian = false;
  npc.conversation_wait_until = 0;
}
