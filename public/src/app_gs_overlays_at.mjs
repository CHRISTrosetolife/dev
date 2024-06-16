import { each } from "./each.mjs";
export function app_gs_overlays_at(tile, lambda_overlay) {
  each(tile.overlays, lambda_overlay);
}
