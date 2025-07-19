import { url_localhost } from "./url_localhost.mjs";
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
  return await new Promise((resolve) => {
    app.listen(port, () => {
      console.log(
        string_combine_multiple([
          server.name,
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
  function server_configure(app) {
    let url;
    url = server_configure_express(app);
    app.post("/", async (req, res, next) => {
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
function url_localhost_client() {
    return url_localhost(8080);
}

