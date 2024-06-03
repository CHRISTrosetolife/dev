export function list_adder_visit(la) {
  return (v) => {
    let { node } = v;
    la(node);
  };
}
