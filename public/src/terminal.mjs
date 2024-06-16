import { function_run_terminal } from "./function_run_terminal.mjs";
import { error } from "./error.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { string_split_underscore } from "./string_split_underscore.mjs";
import { on_keypress } from "./on_keypress.mjs";
import { chalk } from "./chalk.mjs";
import { exit_aliases } from "./exit_aliases.mjs";
import { unawait } from "./unawait.mjs";
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
import { run_git_ac } from "./run_git_ac.mjs";
import { log } from "./log.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { string_to } from "./string_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine } from "./string_combine.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export async function terminal() {
  let commands = [
    {
      match: {
        sequence: "\x16",
        name: "v",
        ctrl: true,
        meta: false,
        shift: false,
      },
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
      match: {
        sequence: "\x03",
        name: "c",
        ctrl: true,
        meta: false,
        shift: false,
      },
      action: exit,
    },
    {
      match: {
        sequence: "\x1B\b",
        name: "backspace",
        ctrl: false,
        meta: true,
        shift: false,
      },
      action: () => {
        log_buffer_clear();
      },
    },
    {
      match: {
        sequence: "\x7F",
        name: "backspace",
        ctrl: false,
        meta: false,
        shift: false,
      },
      action: () => {
        let input = buffer_to_string();
        let tokens = tokens_get(input);
        let mapped = list_map(tokens, string_split_underscore);
        let extra = "";
        if (list_empty_not_is(mapped)) {
          let last = list_last(mapped);
          if (list_multiple_is(last)) {
            let p;
            do {
              p = list_pop(last);
            } while (string_empty_is(p));
            if (list_empty_not_is(last)) {
              extra = "_";
            }
          }
        }
        let mapped2 = list_map(mapped, list_join_underscore);
        log_clear_write_prompt();
        let joined = list_join_space(mapped2);
        joined = string_combine(joined, extra);
        buffer_clear();
        each(joined, keyboard_type);
      },
    },
    {
      match: {
        sequence: "\b",
        name: "backspace",
        ctrl: false,
        meta: false,
        shift: false,
      },
      action: (key) => {
        let b = buffer_get();
        list_pop(b);
        log_clear_write_prompt();
        each(b, keyboard_write);
      },
    },
    {
      match: {
        sequence: "\x17",
        name: "w",
        ctrl: true,
        meta: false,
        shift: false,
      },
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
      match: {
        sequence: "\r",
        name: "return",
        ctrl: false,
        meta: false,
        shift: false,
      },
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
      match: {
        sequence: "\x1B[A",
        name: "up",
        ctrl: false,
        meta: false,
        shift: false,
        code: "[A",
      },
      action: () => {
        log_buffer_clear();
        keyboard_type(list_last(history_get()));
      },
    },
    {
      match: {
        sequence: " ",
        name: "space",
        ctrl: false,
        meta: false,
        shift: false,
      },
      action: () => keyboard_type(" "),
    },
    {
      keys: list_concat(keyboard_keys(), list_map(range(10), string_to)),
      action: (key) => keyboard_type(key.name),
    },
    {
      keys: string_split_empty("_',<>"),
      action: (key) => keyboard_type(key.sequence),
    },
  ];
  let prompt = chalk().greenBright("✟") + " ";
  function log_buffer_clear() {
    buffer_clear();
    log_clear_write_prompt();
  }
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
  on_keypress(on);
  async function on(chunk, key) {
    let { sequence, name, ctrl, meta, shift } = key;
    let actual = [ctrl, meta, shift];
    let count = await counter_async(async (la) => {
      await each_async(commands, async (command) => {
        let match_is = false;
        if (object_property_exists(command, "keys")) {
          let { keys } = command;
          let ctrl_c = list_includes(keys, "ctrl");
          let meta_c = list_includes(keys, "meta");
          let shift_c = list_includes(keys, "shift");
          let expected = [ctrl_c, meta_c, shift_c];
          if (list_any([name, sequence], (ns) => list_includes(keys, ns))) {
            if (equal_json(actual, expected)) {
              match_is = true;
              if (0) {
                log({
                  command,
                  expected,
                  key,
                });
              }
            }
          }
        } else {
          let match = object_property_get(command, "match");
          if (equal_json(match, key)) {
            match_is = true;
          }
        }
        if (match_is) {
          la();
          await command.action(key);
        }
      });
    });
    if (count === 0) {
      log({
        message: "unhandled",
        key,
      });
    }
  }
  function keyboard_type(name) {
    name = string_replace(name, "\n", " ");
    keyboard_write(name);
    list_add(buffer, name);
  }
  function keyboard_write(name) {
    let message = chalk().greenBright(name);
    log_write(message);
  }
  async function next() {
    return await new Promise((resolve) => list_add(on_returns, resolve));
  }
  log_clear();
  while (true) {
    log_write(prompt);
    let input = await next();
    if (list_includes(list_concat([exit.name], exit_aliases()), input)) {
      exit();
    }
    if (input === "cls") {
      log_clear();
    }
    let tokens = tokens_get(input);
    let { first: function_name, remaining: args } =
      list_first_remaining(tokens);
    try {
      let result = await function_run_terminal(function_name, args);
      if (undefined_not_is(result)) {
        log(result);
      }
    } catch (e) {
      log(e.error);
    }
    unawait(run_git_ac);
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
