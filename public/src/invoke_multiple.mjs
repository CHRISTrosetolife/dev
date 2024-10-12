import { invoke } from "./invoke.mjs";
import { each } from "./each.mjs";
export function invoke_multiple(on_clicks) {
  each(on_clicks, invoke);
}
