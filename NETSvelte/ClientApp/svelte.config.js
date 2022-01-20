import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
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

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: () => ({
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
        })
    }
};

export default config;
