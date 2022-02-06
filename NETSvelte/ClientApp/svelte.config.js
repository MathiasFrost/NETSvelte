import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import fs from "fs";

/* We make configure vite to use proxy in development.
 * This is not necessary in production as the app will be compiled to static pages */
let server = {};

if (process.env.NODE_ENV === "development") {
    const devEnv = fs.readFileSync(".env.development").toString().split("\n");
    const serverOptions = {
        PORT: devEnv[0].match(/\d+/)[0],
        HTTPS: devEnv[1].match(/true|false/)[0]
    };

    server.port = serverOptions.PORT;

    if (serverOptions.HTTPS) {
        const devEnvLocal = fs.readFileSync(".env.development.local").toString().split("\n");
        server.https = {
            cert: fs.readFileSync(devEnvLocal[0].match(/C:\\.*\.pem/)[0]),
            key: fs.readFileSync(devEnvLocal[1].match(/C:\\.*\.key/)[0])
        };
    }

    const target = process.env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}` :
        process.env.ASPNETCORE_URLS ? process.env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:27864';

    /* Populate this with endpoints from ASP.NET that should take precedence over the Svelte router */
    server.proxy = {
        "/WeatherForecast": {
            target,
            secure: false
        }
    }
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),
        
        // Apply the proxy setup
        vite: () => ({ server })
    }
};

export default config;
