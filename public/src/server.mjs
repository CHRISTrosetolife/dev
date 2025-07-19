import { url_localhost_client } from "./url_localhost_client.mjs";
import { fn_name } from "./fn_name.mjs";
import { express_app } from "./express_app.mjs";
import { server_configure_express } from "./server_configure_express.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_run_terminal } from "./function_run_terminal.mjs";
import { log } from "./log.mjs";
import { json_to } from "./json_to.mjs";
import { server_port } from "./server_port.mjs";
export async function server() {
  let app = express_app();
  server_configure(app);
  let port = server_port();
  let v = await new Promise(function (resolve) {
    app.listen(port, function () {
      console.log(
        string_combine_multiple([
          fn_name("server"),
          " ",
          url_localhost_client(),
          " listening on port ",
          port,
        ]),
      );
      resolve({
        port,
      });
    });
  });
  return v;
  function server_configure(app) {
    let url;
    url = server_configure_express(app);
    app.post("/", async function (req, res, next) {
      try {
        let { body } = req;
        let { function_name, args } = body;
        let result = await function_run_terminal(function_name, args);
        res.end(json_to(result));
      } catch (e) {
        next(e);
      }
    });
    return url;
  }
}
