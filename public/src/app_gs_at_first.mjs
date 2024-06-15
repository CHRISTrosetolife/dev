import { list_first } from "./list_first.mjs";
import { app_gs_at_generic } from "./app_gs_at_generic.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_gs_at_first(b, a) {
  let ts = list_adder((la) => app_gs_at_generic(b, a, la));
  let t = list_first(t);
  return t;
}
