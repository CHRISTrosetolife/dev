import { list_single } from "./list_single.mjs";
import { app_gs_at_generic } from "./app_gs_at_generic.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_gs_at_first(b, a) {
  let ts = list_adder((la) => app_gs_at_generic(b, a, la));
  let t = list_single(ts);
  return t;
}
