import { list_pop } from "./list_pop.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { counter_async } from "./counter_async.mjs";
import { range } from "./range.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_last } from "./list_last.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
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
import { run_git_ac } from "./run_git_ac.mjs";
import { log } from "./log.mjs";
import readline from "readline";
import chalk from "chalk";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { string_to } from "./string_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine } from "./string_combine.mjs";
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
      keys: ["meta", "backspace"],
      action: () => {
        buffer_clear();
        log_clear_write_prompt();
      },
    },
    {
      keys: ["backspace"],
      action: (key) => {
        let b = buffer_get();
        list_pop(b);
        log_clear_write_prompt();
        each(b, keyboard_write);
      },
    },
    {
      keys: ["ctrl", "w"],
      action: (key) => {
        let input = buffer_to_string();
        let tokens = tokens_get(input);
        let extra = "";
        if (list_empty_not_is(tokens)) {
          list_pop(tokens);
          if (list_empty_not_is(tokens)) {
            extra = " ";
          }
        }
        log_clear_write_prompt();
        let joined = list_join_space(tokens);
        joined = string_combine(joined, extra);
        buffer_clear();
        each(joined, keyboard_type);
      },
    },
    {
      keys: ["return"],
      action: () => {
        log("");
        let result = buffer_to_string();
        history_add(result);
        buffer_clear();
        each(on_returns_get(), (n) => n(result));
        list_remove_all(on_returns_get());
      },
    },
    {
      keys: ["up"],
      action: () => keyboard_type(list_last(history_get())),
    },
    {
      keys: ["space"],
      action: () => keyboard_type(" "),
    },
    {
      keys: list_concat(keyboard_keys(), list_map(range(10), string_to)),
      action: (key) => keyboard_type(key.name),
    },
    {
      keys: string_split_empty("_',"),
      action: (key) => keyboard_type(key.sequence),
    },
  ];
  let prompt = chalk.greenBright("✟") + " ";
  function buffer_to_string() {
    return list_join_empty(buffer_get());
  }
  function log_clear_write_prompt() {
    log_clear();
    log_write(prompt_get());
  }
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
  let history = [];
  function history_add(item) {
    list_add(history, item);
  }
  function history_get() {
    return history;
  }
  let buffer;
  buffer_clear();
  function buffer_clear() {
    buffer = [];
  }
  function buffer_get() {
    return buffer;
  }
  process.stdin.on("keypress", async function (chunk, key) {
    let { sequence, name, ctrl, meta, shift } = key;
    let actual = [ctrl, meta, shift];
    let count = await counter_async(async (la) => {
      await each_async(commands, async (command) => {
        let { keys } = command;
        let ctrl_c = list_includes(keys, "ctrl");
        let meta_c = list_includes(keys, "meta");
        let shift_c = list_includes(keys, "shift");
        let expected = [ctrl_c, meta_c, shift_c];
        if (list_any([name, sequence], (ns) => list_includes(keys, ns))) {
          if (equal_json(actual, expected)) {
            if (0) {
              log({
                command,
                expected,
                key,
              });
            }
            la();
            await command.action(key);
          }
        }
      });
    });
    if (count === 0) {
      log({
        message: "unhandled",
        key,
      });
    }
  });
  function keyboard_type(name) {
    name = string_replace(name, "\n", " ");
    keyboard_write(name);
    list_add(buffer, name);
  }
  function keyboard_write(name) {
    let message = chalk.greenBright(name);
    log_write(message);
  }
  async function next() {
    return await new Promise((resolve) => list_add(on_returns, resolve));
  }
  log_clear();
  while (true) {
    log_write(prompt);
    let input = await next();
    let tokens = tokens_get(input);
    try {
      let result = await run_tokens(tokens);
      if (undefined_not_is(result)) {
        log(result);
      }
    } catch (e) {
      log(chalk.redBright(e.stack));
    }
    each([run_git_ac], (f) => f());
  }
  function tokens_get(input) {
    let tokens = [];
    let current = [];
    let quoted = false;
    each(string_split_empty(input), (s) => {
      if (s === "'") {
        quoted = not(quoted);
      } else if (s === " " && !quoted) {
        token_next();
      } else {
        list_add(current, s);
      }
    });
    if (list_empty_not_is(current)) {
      token_next();
    }
    function token_next() {
      let token = list_join_empty(current);
      current = [];
      list_add(tokens, token);
    }
    return tokens;
  }
}
