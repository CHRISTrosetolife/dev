import { list_remove_last } from "./list_remove_last.mjs";
import { object_property_add_1_initialize } from "./object_property_add_1_initialize.mjs";
import { json_to } from "./json_to.mjs";
import { log_error } from "./log_error.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_acp_message } from "./git_acp_message.mjs";
import { tokens_simple } from "./tokens_simple.mjs";
import { terminal_commands } from "./terminal_commands.mjs";
import { list_filter_indices } from "./list_filter_indices.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { list_size } from "./list_size.mjs";
import { terminal_index_history_transform } from "./terminal_index_history_transform.mjs";
import { string_is } from "./string_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { terminal_data_transform } from "./terminal_data_transform.mjs";
import { function_run_terminal } from "./function_run_terminal.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { on_keypress } from "./on_keypress.mjs";
import { chalk } from "./chalk.mjs";
import { exit_aliases } from "./exit_aliases.mjs";
import { unawait } from "./unawait.mjs";
import { counter_async } from "./counter_async.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_any } from "./list_any.mjs";
import { log_clear } from "./log_clear.mjs";
import { string_replace } from "./string_replace.mjs";
import { exit } from "./exit.mjs";
import { equal_json } from "./equal_json.mjs";
import { log_write } from "./log_write.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { function_unalias } from "./function_unalias.mjs";
export async function terminal() {
  let prompt = chalk().greenBright("✟") + " ";
  let context = {
    keyboard_type,
    log_buffer_clear,
    buffer_to_string,
    terminal_tokens_get,
    log_clear_write_prompt,
    buffer_clear,
    buffer_get,
    keyboard_write,
    history_add,
    on_returns_get,
    history_index_get,
  };
  let commands = terminal_commands(context);
  async function history_index_get(transform) {
    let item = await terminal_index_history_transform(function lambda(index) {
      let v = transform(index);
      return v;
    });
    buffer_clear();
    log_clear();
    log_clear_write_prompt();
    if (string_is(item)) {
      each(item, function (i) {
        let v2 = keyboard_type(i);
        return v2;
      });
    }
  }
  function log_buffer_clear() {
    buffer_clear();
    log_clear_write_prompt();
  }
  function buffer_to_string() {
    let v3 = list_join_empty(buffer_get());
    return v3;
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
  async function history_add(item) {
    await terminal_data_transform(function (d) {
      let counts = object_property_initialize(d, "counts", {});
      let parts = string_split_space(item);
      let first = list_first(parts);
      let f_name_item = function_unalias(first);
      object_property_add_1_initialize(counts, f_name_item);
      let history = object_property_initialize(d, "history", []);
      function predicate(h) {
        let v4 = h === item;
        return v4;
      }
      let indices = list_filter_indices(history, predicate);
      each_reverse(indices, function (index) {
        list_remove_at(history, index);
      });
      list_add(history, item);
      d.history_index = list_size(history);
    });
  }
  async function history_pop() {
    let result = await terminal_data_transform(function lambda(d) {
      let history = object_property_initialize(d, "history", []);
      let r = list_remove_last(history);
      d.history_index = list_size(history);
      return r;
    });
    return result;
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
    let count = await counter_async(async function (la) {
      await each_async(commands, async function (command) {
        let match_is = false;
        if (object_property_exists(command, "keys")) {
          let { keys } = command;
          let ctrl_c = list_includes(keys, "ctrl");
          let meta_c = list_includes(keys, "meta");
          let shift_c = list_includes(keys, "shift");
          let expected = [ctrl_c, meta_c, shift_c];
          if (
            list_any([name, sequence], function (ns) {
              let v5 = list_includes(keys, ns);
              return v5;
            })
          ) {
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
  function keyboard_type(input) {
    each(input, function (i) {
      i = string_replace(i, "\n", " ");
      keyboard_write(i);
      list_add(buffer, i);
    });
  }
  function keyboard_write(name) {
    let message = chalk().greenBright(name);
    log_write(message);
  }
  async function next() {
    let v6 = await new Promise(function (resolve) {
      let v7 = list_add(on_returns, resolve);
      return v7;
    });
    return v6;
  }
  while (true) {
    log_write(prompt);
    let input = await next();
    if (list_includes(list_concat([fn_name("exit")], exit_aliases()), input)) {
      await history_pop();
      exit();
    }
    if (input === "cls") {
      log_clear();
    }
    let tokens = terminal_tokens_get(input);
    if (0) {
      log({
        tokens,
      });
    }
    if (list_empty_is(tokens)) {
      continue;
    }
    let { first: function_name, remaining: args } =
      list_first_remaining(tokens);
    try {
      let result = await function_run_terminal(function_name, args);
      if (undefined_not_is(result)) {
        log(result);
      }
    } catch (e) {
      log_error(json_to(e));
    }
    unawait(async function () {
      await git_acp_message(input);
    });
  }
  function terminal_tokens_get(input) {
    let split_string = " ";
    let quote_string = "'";
    let v8 = tokens_simple(input, quote_string, split_string);
    return v8;
  }
}
