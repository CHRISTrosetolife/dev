import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
export function server_configure_express(app) {
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
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
}
