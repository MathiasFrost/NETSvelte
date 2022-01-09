import wrap from "svelte-spa-router/wrap";
import type {RouteDefinition} from "svelte-spa-router";
import Home from "$pages/Home.svelte";
import NotFound from "$components/NotFound.svelte";
import WeatherForecast from "$pages/WeatherForecast.svelte";

export const routes: RouteDefinition = {
    "/": wrap({
        component: Home
    }),
    "/weather-forecast": wrap({
        component: WeatherForecast
    }),
    /* Standard endpoints for OIDC
    "/signin-callback": wrap({
       component: SigninCallback
    }),
    "/logout-redirect": wrap({
       component: LogoutRedirect
    }),
    */
    "*": wrap({
        component: NotFound
    })
};
