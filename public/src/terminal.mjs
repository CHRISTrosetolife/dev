import { list_any } from "./list_any.mjs";
import { log_clear } from "./log_clear.mjs";
import { string_replace } from "./string_replace.mjs";
import { exit } from "./exit.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { equal_json } from "./equal_json.mjs";
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
import { undefined_is } from "./undefined_is.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_async } from "./each_async.mjs";
export async function terminal() {
  let commands = [
    {
      keys: ["ctrl", "v"],
      action: async () => {
        let value = await clipboard_paste();
        let split = string_split_empty(value);
        let filtered = list_filter(split, (s) => s !== "\r");
        each(filtered, (c) => {
          keyboard_type(c);
        });
      },
    },
    {
      keys: ["ctrl", "c"],
      action: exit,
    },
    {
      keys: ["backspace"],
      action: () => {
        buffer_clear();
        log_clear();
        log_write(prompt_get());
      },
    },
    {
      keys: ["return"],
      action: () => {
        log("");
        let result = list_join_empty(buffer_get());
        buffer_clear();
        each(on_returns_get(), (n) => n(result));
        list_remove_all(on_returns_get());
      },
    },
    {
      keys: ["space"],
      action: () => keyboard_type(" "),
    },
  ];
  let prompt = chalk.greenBright("✟") + " ";
  function prompt_get() {
    return prompt;
  }
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  let on_returns = [];
  function on_returns_get() {
    return on_returns;
  }
  let buffer;
  buffer_clear();
  function buffer_clear() {
    buffer = [];
  }
  process.stdin.on("keypress", async function (chunk, key) {
    let { sequence, name, ctrl, meta, shift } = key;
    let b = [ctrl, meta, shift];
    if (list_all(b, (k) => k === false)) {
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
        keyboard_type(name);
      }
    }
    await each_async(commands, async (c) => {
      let { keys } = c;
      let ctrl_c = list_includes(keys, "ctrl");
      let meta_c = list_includes(keys, "meta");
      let shift_c = list_includes(keys, "shift");
      if (list_any([name, sequence], (ns) => list_includes(keys, ns))) {
        let b_c = [ctrl_c, meta_c, shift_c];
        if (equal_json(b, b_c)) {
          await c.action();
        }
      }
    });
  });
  function keyboard_type(name) {
    name = string_replace(name, "\n", " ");
    let message = chalk.greenBright(name);
    log_write(message);
    list_add(buffer, name);
  }
  async function next() {
    return await new Promise((resolve) => list_add(on_returns, resolve));
  }
  log_clear();
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
