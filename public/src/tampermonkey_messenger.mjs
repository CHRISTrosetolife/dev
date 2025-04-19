import { html_element_wait } from "./html_element_wait.mjs";
export function tampermonkey_messenger() {
  alert("working");
  html_element_wait;
  window.addEventListener("load", function () {
    alert("It's loaded!");
  });
}
