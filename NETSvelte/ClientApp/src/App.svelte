<script lang="ts">
    import Router, {link} from "svelte-spa-router";
    import {routes} from "$root/routes";
</script>

<header>
    <a use:link href="/">Home</a>
    <a use:link href="/weather-forecast">Weather Forecast</a>
</header>

<main>
    <Router {routes}/>
</main>

<style lang="scss" global>
  @use "styles";
</style>