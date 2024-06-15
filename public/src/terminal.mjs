import { each } from "./each.mjs";
import { run_tokens } from "./run_tokens.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { run_git_ac } from "./run_git_ac.mjs";
import { log } from "./log.mjs";
import readline_sync from "readline-sync";
import { list_filter } from "./list_filter.mjs";
export async function terminal() {
  while (true) {
    let input = readline_sync.question(`> `);
    let tokens = string_split_space(input);
    tokens = list_filter(tokens, string_empty_not_is);
    let result = await run_tokens(tokens);
    log(result);
    each([run_git_ac], (f) => f());
  }
}
