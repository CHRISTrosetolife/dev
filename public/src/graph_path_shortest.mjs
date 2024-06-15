import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest(vertices, edge_lambda) {
  list_adder((la) => each(vertices, (a) => each(vertices, (b) => {})));
}
