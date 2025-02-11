import { list_find_property } from "./list_find_property.mjs";
export function list_find_verse_number(verses_interlinear, verse_number) {
  return list_find_property(verses_interlinear, "verse_number", verse_number);
}
