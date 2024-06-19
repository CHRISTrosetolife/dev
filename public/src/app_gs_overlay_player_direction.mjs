import { html_style_hidden } from "./html_style_hidden.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { each } from "./each.mjs";
import { game_character_direction_index } from "./game_character_direction_index.mjs";
export function app_gs_overlay_player_direction(
  player_c,
  direction,
  walk_offset,
) {
  let di = game_character_direction_index(direction, walk_offset);
  let { player_directions } = player_c;
  each(player_directions, (pd) => {
    if (pd === di) {
      html_style_visible(pd);
    } else {
      html_style_hidden(pd);
    }
  });
}
