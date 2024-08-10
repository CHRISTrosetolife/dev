import { log } from "./log.mjs";
import text from "textbelt";
export function sandbox_3() {
  log({
    text,
  });
  text.send("9043144052", "A sample text message!", undefined, function (err) {
    if (err) {
      console.log(err);
    }
  });
}
