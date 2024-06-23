import { error } from "./error.mjs";
import { app_gs_map_cell_click } from "./app_gs_map_cell_click.mjs";
import { app_gs_player_c_generic } from "./app_gs_player_c_generic.mjs";
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
      if (o.type === "base") {
        let { id: o_id } = o;
        html_data_set(clicker, "overlay", o_id);
        let overlay_c = game_img(map_c, game_img_base(o_id), tile, "overlay");
        la(overlay_c);
      } else if (o.type === "npc") {
        let overlay_c = app_gs_player_c_generic(map_c, o.character, o);
        html_data_set(overlay_c, "type", "npc");
        la(overlay_c);
      } else {
        error();
      }
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
