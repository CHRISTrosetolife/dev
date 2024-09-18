import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { url_localhost } from "./url_localhost.mjs";
import { function_run_terminal } from "./function_run_terminal.mjs";
import { log } from "./log.mjs";
import { json_to } from "./json_to.mjs";
import { server_port } from "./server_port.mjs";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
export function server() {
  let app = express();
  let port = server_port();
  let options = {
    origin: [url_localhost(8080)],
  };
  app.use(cors(options));
  let limit = "50mb";
  app.use(
    express.json({
      limit: limit,
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: limit,
      extended: true,
    }),
  );
  app.post("/", async (req, res) => {
    log("here");
    let { body } = req;
    let { function_name, args } = body;
    let result = await function_run_terminal(function_name, args);
    res.end(json_to(result));
  });
  app.listen(port, () => {
    console.log(
      string_combine_multiple([server.name, " listening on port ", port]),
    );
  });
}
