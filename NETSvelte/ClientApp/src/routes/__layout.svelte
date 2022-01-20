<script lang="ts">
    import "bootstrap/dist/css/bootstrap.css";
    import "../app.css";
    import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
    <title>NETSvelte</title>
</svelte:head>

<NavMenu />

<main class="container">
    <slot />
</main>
