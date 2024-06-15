import { clipboard_paste } from "./clipboard_paste.mjs";
import { log_write } from "./log_write.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { each } from "./each.mjs";
import { run_tokens } from "./run_tokens.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { run_git_ac } from "./run_git_ac.mjs";
import { log } from "./log.mjs";
import readline from "readline";
import chalk from "chalk";
import { list_filter } from "./list_filter.mjs";
import { list_all } from "./list_all.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
export async function terminal() {
  let commands = [
    {
      keys: ["ctrl", "v"],
      action: clipboard_paste,
    },
  ];
  let prompt = chalk.greenBright("✟") + " ";
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  let on_returns = [];
  let buffer = [];
  let replacements = {
    space: " ",
  };
  process.stdin.on("keypress", function (chunk, key) {
    let { sequence, name, ctrl, meta, shift } = key;
    let b = [ctrl, meta, shift];
    if (list_all(b, (k) => k === false)) {
      if (name === "return") {
        log("");
        let result = list_join_empty(buffer);
        buffer = [];
        each(on_returns, (n) => n(result));
        list_remove_all(on_returns);
      } else {
        if (name === "backspace") {
          buffer = [];
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          log_write(prompt);
        } else {
          if (undefined_is(name)) {
            let s = "_";
            if (sequence === s) {
              keyboard_type(s);
            } else {
              log({
                key,
              });
            }
          } else {
            if (object_property_exists(replacements, name)) {
              name = object_property_get(replacements, name);
            }
            keyboard_type(name);
          }
        }
      }
    } else {
      list_filter(commands, (c) => {
        let { keys } = c;
        let ctrl_c = list_includes(keys, "ctrl");
        let meta_c = list_includes(keys, "meta");
        let shift_c = list_includes(keys, "shift");
        let b_c = [ctrl_c, meta_c, shift_c];
      });
    }
  });
  function keyboard_type(name) {
    let message = chalk.greenBright(name);
    log_write(message);
    list_add(buffer, name);
  }
  async function next() {
    return await new Promise((resolve) => list_add(on_returns, resolve));
  }
  console.clear();
  while (true) {
    log_write(prompt);
    let input = await next();
    let tokens = string_split_space(input);
    tokens = list_filter(tokens, string_empty_not_is);
    try {
      let result = await run_tokens(tokens);
      if (undefined_not_is(result)) {
        log(result);
      }
    } catch (e) {
      log(chalk.redBright(e));
    }
    each([run_git_ac], (f) => f());
  }
}
