export function logic_parse_variable(identifier) {
  return {
    type: "variable",
    name: identifier,
  };
}
