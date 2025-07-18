import { prayers_church } from "./prayers_church.mjs";
import { prayers_needy } from "./prayers_needy.mjs";
export function prayers_orphans_widows_unstained_world() {
  let v = [
    prayers_needy(),
    "Save, bless and be a Father to the fatherless and the motherless",
    "Save, bless and be a Husband to the widow",
    "Save, bless and feed the hungry and starving",
    "Save, bless and give drink to the thirsty and dehydrated",
    "Save, bless and clothe the unclothed",
    "Save, bless and free the innocent prisoners",
    "Save, bless and heal the sick",
    "Save, bless and provide for the poor",
    "Exalt the lowly",
    "Let all Christians excel in their gifts",
    "Let no gifted Christian do slavish, menial or trivial tasks",
    prayers_church(),
  ];
  return v;
}
