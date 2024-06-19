import { list_first } from "./list_first.mjs";
import { app_language_quiz_settings } from "./app_language_quiz_settings.mjs";
export function app_language_quizzes_start(
  atoms_slice,
  settings_choices,
  chunk_sizes,
  refresh_quiz,
) {
  let atoms = atoms_slice();
  settings_choices = app_language_quiz_settings(atoms, chunk_sizes);
  refresh_quiz(list_first(settings_choices));
  return settings_choices;
}
