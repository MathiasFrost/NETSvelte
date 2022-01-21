<script lang="ts">
    import { page } from "$app/stores";
    import { Collapse } from "bootstrap";
    import { onMount } from "svelte";

    let isExpanded: boolean = true;
    let container: HTMLDivElement;
    let collapse: Collapse;

    function toggle() {
        collapse.toggle();
        isExpanded = !isExpanded;
    }

    onMount(() => {
        collapse = new Collapse(container, {toggle: false});
    });
</script>

<header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container">
            <a class="navbar-brand" href="/">NETSvelte</a>
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={isExpanded}
                    on:click={toggle}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-sm-inline-flex justify-content-end" bind:this={container}>
                <ul class="navbar-nav flex-grow">
                    <li class="nav-item">
                        <a class="nav-link" href="/"
                           class:active={$page.url.pathname === '/'}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/counter"
                           class:active={$page.url.pathname === '/counter'}>Counter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/fetch-data"
                           class:active={$page.url.pathname === '/fetch-data'}>Fetch data</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style global>
    a.navbar-brand {
        white-space: normal;
        text-align: center;
        word-break: break-all;
    }

    html {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
    }

    .box-shadow {
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
    }
</style>
