import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_length } from "./list_length.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let limit = 75;
  let skip = 0;
  let atoms = await ceb_bible_words_definitions_atoms(skip, limit);
  return {
    atoms,
    c: list_length(atoms),
  };
}
