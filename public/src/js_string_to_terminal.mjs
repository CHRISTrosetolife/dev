import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_double } from "./string_double.mjs";
import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { string_replace } from "./string_replace.mjs";
export async function js_string_to_terminal() {
  function waitForInput() {
    let v2 = new Promise(function (resolve) {
      let input = "";
      process.stdin.setEncoding("utf8");
      process.stdin.setRawMode(true);
      process.stdin.resume();
      function onData(char) {
        if (char === "\r" || char === "\n") {
          process.stdin.setRawMode(false);
          process.stdin.pause();
          process.stdin.removeListener("data", onData);
          console.log();
          resolve(input);
        } else if (char === "\u0003") {
          process.stdin.setRawMode(false);
          process.stdin.pause();
          process.exit();
        } else {
          process.stdout.write(char);
          input += char;
        }
      }
      process.stdin.on("data", onData);
    });
    return v2;
  }
  let code = await waitForInput();
  let parsed = js_parse_expression(code);
  let value = object_property_get(parsed, "value");
  log({
    value,
  });
  let q = terminal_tokens_quote();
  let replaced = string_replace(value, q, string_double(q));
  let v = string_delimit(replaced);
  return v;
}
