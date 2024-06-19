import { game_tile_size_px } from "./game_tile_size_px.mjs";
export function app_gs_screen_size() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let size_px = game_tile_size_px();
  let x_count = w / size_px;
  let y_count = h / size_px;
  return {
    x_count,
    y_count,
    size_px,
  };
}
