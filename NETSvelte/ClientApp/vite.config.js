import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import path from "path";
import fs from "fs";

const devEnv = fs.readFileSync(".env.development").toString().split("\n");
const serverOptions = {
    PORT: devEnv[0].match(/\d+/)[0],
    HTTPS: devEnv[1].match(/true|false/)[0]
};

const devEnvLocal = fs.readFileSync(".env.development.local").toString().split("\n");
const httpsOptions = {
    cert: fs.readFileSync(devEnvLocal[0].match(/C:\\.*\.pem/)[0]),
    key: fs.readFileSync(devEnvLocal[1].match(/C:\\.*\.key/)[0])
};

const target = process.env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}` :
  process.env.ASPNETCORE_URLS ? process.env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:27864';

// https://vitejs.dev/config/
const config = defineConfig({
    plugins: [svelte()],
    server: {
        port: serverOptions.PORT,
        https: httpsOptions,
        proxy: {
            "/WeatherForecast": {
                target: target,
                secure: false
            }
        }
    },
    build: {
        sourcemap: true,
        outDir: "build"
    },
    resolve: {
        alias: {
            "$components": path.resolve("./src/components"),
            "$models": path.resolve("./src/models"),
            "$services": path.resolve("./src/services"),
            "$helpers": path.resolve("./src/helpers"),
            "$pages": path.resolve("./src/pages"),
            "$root": path.resolve("./src"),
            "$public": path.resolve("./public"),
            "$lib": path.resolve("./lib")
        }
    },
    clearScreen: false
});

module.exports = config;