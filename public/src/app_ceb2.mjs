import { list_adder } from "./list_adder.mjs";
import { each_range } from "./each_range.mjs";
import { log } from "./log.mjs";
import { app_language_2 } from "./app_language_2.mjs";
export async function app_ceb2() {
  let language_learn = "ceb";
  let language_fluent = "en";
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    console.log(localStorage.getItem());
  }
  list_adder((la) => {
    each_range(localStorage.length, (i) => {
      la(localStorage.key(i));
    });
  });
  await app_language_2(app_ceb2, language_learn, language_fluent);
}
