import { returns } from "./returns.mjs";
export function assert_message(fn, args) {
  returns(fn, true, args);
}
