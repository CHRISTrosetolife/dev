import { app_pray_music } from "./app_pray_music.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray() {
  let index = 0;
  html_style_default_initialize();
  app_pray_music(index);
}
