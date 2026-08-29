import fs from "node:fs";
import oneConfig from "@buildawesome.one/config";
import shotpipePlugin from "eleventy-plugin-shotpipe";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}

export default async function ($config) {
  await oneConfig($config);

  $config.addPlugin(shotpipePlugin, {
    key: process.env.SHOTPIPE_KEY,
    secret: process.env.SHOTPIPE_SECRET,
    template: "terminal",
    accent: "#5ca9ff",
  });
}
