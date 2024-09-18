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
  app.use(
    express.json({
      limit: "50mb",
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
    }),
  );
  app.post("/", async (req, res) => {
    let { body } = req;
    let { function_name, args } = body;
    let result = await function_run_terminal(function_name, args);
    res.end(json_to(result));
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
