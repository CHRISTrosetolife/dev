import { app_preach_sermon_contents } from "./app_preach_sermon_contents.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_supper() {
    let root = await html_style_default_initialize_axios();
  await app_preach_sermon_contents(root, "supper");
}
