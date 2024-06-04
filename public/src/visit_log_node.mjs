import { log } from "./log.mjs";
export function visit_log_node() {
  return (v) => {
    let { node } = v;
    log({
      node,
    });
  };
}
