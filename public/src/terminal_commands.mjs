import { string_delimit_generic } from "./string_delimit_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_double } from "./string_double.mjs";
import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { terminal_tokens_get } from "./terminal_tokens_get.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { string_to } from "./string_to.mjs";
import { range } from "./range.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { list_concat } from "./list_concat.mjs";
import { add_1 } from "./add_1.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_split_underscore } from "./string_split_underscore.mjs";
import { list_map } from "./list_map.mjs";
import { exit } from "./exit.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { clipboard_paste } from "./clipboard_paste.mjs";
import { string_replace } from "./string_replace.mjs";
export function terminal_commands(context) {
  let {
    keyboard_type,
    log_buffer_clear,
    buffer_to_string,
    log_clear_write_prompt,
    buffer_clear,
    buffer_get,
    keyboard_write,
    history_add,
    on_returns_get,
    history_index_get,
  } = context;
  let symbols = "?_',<>=\"+.(){}[]:/-\\*$";
  let v = [
    {
      match: {
        sequence: "\x02",
        name: "b",
        ctrl: true,
        meta: false,
        shift: false,
      },
      action: async function () {
        let value = await clipboard_paste();
        let split = string_split_empty(value);
        let filtered = list_filter(split, function (s) {
          let v2 = s !== "\r";
          return v2;
        });
        keyboard_type(filtered);
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
      action: function () {
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
      action: function () {
        let input = buffer_to_string();
        let tokens = terminal_tokens_get(input);
        let mapped = list_map(tokens, string_split_underscore);
        let extra = "";
        if (list_empty_not_is(mapped)) {
          let last = list_last(mapped);
          if (list_multiple_is(last)) {
            let p;
            do {
              p = list_remove_last(last);
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
        keyboard_type(joined);
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
      action: function (key) {
        let b = buffer_get();
        if (list_empty_is(b)) {
          return;
        }
        list_remove_last(b);
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
      action: function (key) {
        log({
        sequence: "\x17",
        name: "w",
        ctrl: true,
        meta: false,
        shift: false,
      });
        let input = buffer_to_string();
        let tokens = terminal_tokens_get(input);
        let quote_string = terminal_tokens_quote();
        let escaped = string_double(quote_string);
        let mapped = list_map(tokens, function (t) {
          return string_replace(t, quote_string, escaped);
        });
        let mapped2 = list_map(mapped, function (t) {
          if (string_includes(t, escaped)) {
            return string_delimit_generic(quote_string, t);
          }
          return t;
        });
        let extra = "";
        if (list_empty_not_is(mapped2)) {
          list_remove_last(mapped2);
          if (list_empty_not_is(mapped2)) {
            extra = " ";
          }
        }
        log_clear_write_prompt();
        let joined = list_join_space(mapped2);
        joined = string_combine(joined, extra);
        buffer_clear();
        keyboard_type(joined);
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
      action: async function () {
        log("");
        let result = buffer_to_string();
        await history_add(result);
        buffer_clear();
        each(on_returns_get(), function (n) {
          return n(result);
        });
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
      action: async function () {
        await history_index_get(subtract_1);
      },
    },
    {
      match: {
        sequence: "\x1B[B",
        name: "down",
        ctrl: false,
        meta: false,
        shift: false,
        code: "[B",
      },
      action: async function () {
        await history_index_get(add_1);
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
      action: function () {
        return keyboard_type(" ");
      },
    },
    {
      keys: list_concat(keyboard_keys(), list_map(range(10), string_to)),
      action: function (key) {
        return keyboard_type(key.name);
      },
    },
    {
      keys: list_concat(keyboard_keys(), ["shift"]),
      action: function (key) {
        return keyboard_type(key.sequence);
      },
    },
    {
      keys: string_split_empty(symbols),
      action: function (key) {
        return keyboard_type(key.sequence);
      },
    },
  ];
  return v;
}
