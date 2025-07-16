import { prayers_church } from "./prayers_church.mjs";
import { prayers_needy } from "./prayers_needy.mjs";
export function prayers_orphans_widows_unstained_world() {
  let v = [
    prayers_needy(),
    "Feed the hungry and starve",
    "give drink to the thirsty and dehydrated",
    "clothe the unclothed",
    "Exalt the lowly",
    "Let all Christians excel in their gifts",
    "Let no gifted Christian do slavish, menial or trivial tasks",
    prayers_church(),
  ];
  return v;
}
