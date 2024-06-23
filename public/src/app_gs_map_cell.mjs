import { app_gs_npc_icon_wait } from "./app_gs_npc_icon_wait.mjs";
import { app_gs_npc_icon_christian } from "./app_gs_npc_icon_christian.mjs";
import { app_gs_npc_icon_unmet } from "./app_gs_npc_icon_unmet.mjs";
import { html_img_element } from "./html_img_element.mjs";
import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { app_gs_character_c } from "./app_gs_character_c.mjs";
import { error } from "./error.mjs";
import { app_gs_map_cell_click } from "./app_gs_map_cell_click.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_div } from "./html_div.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_gs_map_cell(map, map_c, player_c, tile) {
  let clicker = html_div(map_c);
  let overlays = list_adder((la) =>
    each(tile.overlays, function lambda_overlay(o) {
      let overlay_c;
      if (o.type === "base") {
        let { id: o_id } = o;
        html_data_set(clicker, "overlay", o_id);
        overlay_c = game_img(map_c, game_img_base(o_id), tile, "overlay");
      } else if (o.type === "npc") {
        overlay_c = app_gs_character_c(map_c, o.character, o);
        html_data_set(overlay_c, "type", "npc");
        let size = 1 / 3;
        let c_blur = html_img_element(map_c);
        html_data_set(c, "type", "npc_overlay_blur");
        let c = html_img_element(map_c);
        html_data_set(c, "type", "npc_overlay");
        [
          {
            component: c_blur,
            type: "npc_overlay_blur",
          },
          {
            component: c,
            type: "npc_overlay",
          },
        ];
        game_img_style_generic(
          c,
          size,
          size,
          "player_overlay",
          tile.y,
          tile.x + 1 - size,
        );
        if (o.conversation_count === 0) {
          app_gs_npc_icon_unmet(c);
          app_gs_npc_icon_christian(c);
          app_gs_npc_icon_wait(c);
        }
      } else {
        error();
      }
      la(overlay_c);
    }),
  );
  let { id } = tile;
  let tile_c = game_img(map_c, game_img_base(id), tile, "tile");
  game_img_style(clicker, tile.y, tile.x, "clicker");
  html_on_click(clicker, async () => {
    await app_gs_map_cell_click(map, map_c, player_c, tile);
  });
  return list_concat([tile_c, clicker], overlays);
}
