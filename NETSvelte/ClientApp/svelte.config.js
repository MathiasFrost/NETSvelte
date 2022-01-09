const sveltePreprocess = require("svelte-preprocess");

const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        sveltePreprocess({
            postcss: true
        })
    ]
};

module.exports = config;
