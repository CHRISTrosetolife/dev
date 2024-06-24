import { bible_names_men } from "./bible_names_men.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_player_new(game) {
  game.player = {};
  game.player.walk_offset = 0;
  game.player.walk_previous = 1;
  game.player.character = list_random_item(game_img_list_male());
  game.player.name = list_random_item(bible_names_men());
  game.player.pray = {
    conversation: false,
  };
  game.player.conversation_count = 0;
}
