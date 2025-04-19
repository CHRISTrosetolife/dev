export function tampermonkey_messenger() {
  alert("working");
  window.addEventListener("load", function () {
    alert("It's loaded!");
  });
}
