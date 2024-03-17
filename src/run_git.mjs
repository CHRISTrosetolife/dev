import { run } from "./run.mjs";
import { git_acp } from "./git_acp.1.mjs";

export async function run_git() {
    await run();
    await git_acp();
}