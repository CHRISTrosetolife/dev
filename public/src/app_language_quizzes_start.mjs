import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_language_refresh_quiz } from "./app_language_refresh_quiz.mjs";
import { app_language_atoms_slice } from "./app_language_atoms_slice.mjs";
import { list_first } from "./list_first.mjs";
import { app_language_quiz_settings } from "./app_language_quiz_settings.mjs";
export async function app_language_quizzes_start(context, chunk_sizes) {
  let { app_fn, group } = context;
  let atoms = app_language_atoms_slice(app_fn, group);
  storage_local_set(
    context.app_fn,
    "settings_choices",
    app_language_quiz_settings(atoms, chunk_sizes),
  );
  storage_local_get(
    context.app_fn,
    "settings_choices",
    app_language_quiz_settings(atoms, chunk_sizes),
  );
  await app_language_refresh_quiz(
    context,
    list_first(context.settings_choices),
  );
}
