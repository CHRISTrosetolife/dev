import { app_html_path_dev } from "./app_html_path_dev.mjs";
import { app_html_generate_generic } from "./app_html_generate_generic.mjs";
export async function app_html_generate_dev(name) {
  await app_html_generate_generic(name, "..", (name) =>
    app_html_path_dev(name),
  );
}
