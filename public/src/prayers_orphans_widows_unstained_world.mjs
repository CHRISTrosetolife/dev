import { prayers_church } from "./prayers_church.mjs";
import { prayers_needy } from "./prayers_needy.mjs";
export function prayers_orphans_widows_unstained_world() {
  return [prayers_needy(), prayers_church()];
}
