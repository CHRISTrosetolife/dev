import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest(vertices, edge_lambda) {
  list_adder((la) =>
    each_index(vertices, (a, ai) => each_index(vertices, (b, bi) => {})),
  );
}
