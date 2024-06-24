import { app_gs_map_at_generic } from "./app_gs_map_at_generic.mjs";
export function app_gs_map_html_at(context, coordinates) {
  let grid = context.html;
  return app_gs_map_at_generic(grid, coordinates);
}
