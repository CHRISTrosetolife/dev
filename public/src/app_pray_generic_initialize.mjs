import { app_pray_generic } from "./app_pray_generic.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_pray_generic_initialize(app_fn, ps) {
  let body = html_style_default_initialize();
  await app_pray_generic(body, ps, app_fn);
}
