import { html_element_wait } from "./html_element_wait.mjs";
export async function tampermonkey_messenger() {
  alert("working");
  await html_element_wait("div[aria-label=Thread composer]");
  alert("It's loaded!");
}
