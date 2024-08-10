import { log } from "./log.mjs";
import text from "textbelt";
export function sandbox_3() {
  text.send("9491234567", "A sample text message!", undefined, function (err) {
    if (err) {
      console.log(err);
    }
  });
}
