import { exit } from "./exit.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { on_keypress } from "./on_keypress.mjs";
import readline from "readline";
export async function sandbox_5() {
  function on_keypress(on) {
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }
    process.stdin.on("keypress", on);
  }
  function detach_keypress(on) {
    process.stdin.removeListener("keypress", on);
  }
  async function waitForLineInput(promptText = "") {
    let v = new Promise(function (resolve) {
      let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(promptText, function (answer) {
        rl.close();
        resolve(answer);
      });
    });
    return v;
  }
  let mainKeyHandler = function (str, key) {
    console.log(string_combine_multiple(["Key pressed: ", str]));
    if (str === "p") {
      detach_keypress(mainKeyHandler);
      waitForLineInput("Enter input: ").then(function (input) {
        console.log(string_combine_multiple(["You typed: ", input]));
        on_keypress(mainKeyHandler);
      });
    }
    if (key.ctrl && key.name === "c") {
      process.exit();
    }
  };
  on_keypress(mainKeyHandler);
}
