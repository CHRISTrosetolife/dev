import { string_substring } from "./string_substring.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { string_take } from "./string_take.mjs";
import { string_length } from "./string_length.mjs";
import { assert_message_string } from "./assert_message_string.mjs";
import { assert_boolean_message } from "./assert_boolean_message.mjs";
import { json_to } from "./json_to.mjs";
import { returns_message } from "./returns_message.mjs";
import { returns } from "./returns.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { web_not_is } from "./web_not_is.mjs";
import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
import { command_line_exec_generic } from "./command_line_exec_generic.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { command_line_git_multiple } from "./command_line_git_multiple.mjs";
import { git_fix } from "./git_fix.mjs";
export async function sandbox_3() {
  return await git_fix();
  async function git_fix() {
    let commands = [
      "checkout master",
      "fetch",
      "rebase origin/master",
      "push origin master:master",
    ];
    return await command_line_git_multiple(commands);
  }
  async function command_line_git_multiple(commands) {
    let result = await list_map_async(
      commands,
      async (command) => await command_line_git(command),
    );
    return result;
  }
  async function command_line_git(args) {
    let command = string_combine_multiple(["git ", args]);
    return await command_line_exec(command);
  }
  async function command_line_exec(command) {
    return await command_line_exec_generic(command, {});
  }
  async function command_line_exec_generic(command, options) {
    let c = await import_node("child_process");
    let { exec } = c;
    return await new Promise((resolve) => {
      exec(command, options, (error, stdout, stderr) => {
        resolve({
          error,
          stdout,
          stderr,
        });
      });
    });
  }
  function error(message) {
    throw new Error(message);
  }
  async function import_node(libary_to_import) {
    let a;
    if (web_not_is()) {
      a = await import(libary_to_import);
    }
    return a;
  }
  function web_not_is() {
    return typeof window === "undefined";
  }
  async function list_map_async(list, mapper) {
    return await list_adder_async(async (la) => {
      await each_async(list, async (l) => {
        let mapped = mapper(l);
        let waited = await mapped;
        la(waited);
      });
    });
  }
  async function list_adder_async(lambda) {
    let result = [];
    await lambda((item) => list_add(result, item));
    return result;
  }
  function list_add(list, item) {
    assert_arguments_length(arguments, 2);
    list.push(item);
  }
  function assert_arguments_length(args, expected) {
    assert(equal, [arguments.length, 2]);
    let actual = args.length;
    assert_message(equal, [actual, expected], () => ({
      message: "expecting different argument count",
      expected,
      actual,
    }));
  }
  function equal(a, b) {
    return a === b;
  }
  function assert(fn, args) {
    returns(fn, true, args);
  }
  function returns(fn, expected, args) {
    returns_message(fn, expected, args, message_get);
    function message_get() {
      return json_to(args);
    }
  }
  function returns_message(fn, expected, args, message_get) {
    let actual = fn(...args);
    let e = equal(actual, expected);
    assert_boolean_message(e, message_get);
  }
  function assert_boolean_message(condition, message_get) {
    if (condition === false) {
      error(message_get());
    }
  }
  function json_to(object) {
    return JSON.stringify(object);
  }
  function assert_message(fn, args, message_get) {
    return assert_message_string(fn, args, () => {
      let j = json_to(message_get());
      let limit = 1000;
      if (string_length(j > limit)) {
        return string_take(j, limit);
      }
      return j;
    });
  }
  function assert_message_string(fn, args, message_get) {
    returns_message(fn, true, args, message_get);
  }
  function string_length(input) {
    return input.length;
  }
  function string_take(input, count) {
    let length = string_length(input);
    assert_message(less_than_equal, [count, length], () => ({
      input,
      count,
      length,
    }));
    return string_substring(input, 0, count);
  }
  function less_than_equal(a, b) {
    return a <= b;
  }
  function string_substring(input, start, end) {
    assert_arguments_length(arguments, 3);
    return input.substring(start, end);
  }
  async function each_async(list, lambda) {
    for (let element of list) {
      await lambda(element);
    }
  }
}
