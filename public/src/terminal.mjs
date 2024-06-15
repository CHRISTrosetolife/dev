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
export async function terminal() {
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  let on_returns = [];
  let buffer = [];
  process.stdin.on("keypress", function (chunk, key) {
    let { sequence, name, ctrl, meta, shift } = key;
    if (list_all([ctrl, meta, shift], (k) => k === false)) {
      if (name === "return") {
        let result = list_join_empty(buffer);
        buffer = [];
        each(on_returns, (n) => n(result));
        list_remove_all(on_returns);
      } else {
        process.stdout.write(chalk.greenBright(name));
        list_add(buffer, name);
      }
    }
  });
  async function next() {
    return await new Promise((resolve) => list_add(on_returns, resolve));
  }
  while (true) {
    let line = await next();
    log({
      line,
    });
    continue;
    process.stdout.write(chalk.greenBright(`✝ `));
    let input = readline_sync.question();
    let tokens = string_split_space(input);
    tokens = list_filter(tokens, string_empty_not_is);
    try {
      let result = await run_tokens(tokens);
      log(result);
    } catch (e) {
      log(chalk.redBright(e));
    }
    each([run_git_ac], (f) => f());
  }
}
