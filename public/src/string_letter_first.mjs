export function string_letter_first(current_token) {
  let m = current_token.match(/[a-z]/i);
  if (m === null) {
    return null;
  }
  return m[0];
}
