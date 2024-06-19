import { list_first } from "./list_first.mjs";
import { app_language_quiz_settings } from "./app_language_quiz_settings.mjs";
export function app_language_quizzes_start(
  atoms_slice,
  context,
  chunk_sizes,
  refresh_quiz,
) {
  let atoms = atoms_slice();
  context.settings_choices = app_language_quiz_settings(atoms, chunk_sizes);
  refresh_quiz(list_first(context.settings_choices));
}
