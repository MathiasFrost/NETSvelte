<script lang="ts">
    import {onMount} from "svelte";
    import SomeComponent from "$components/SomeComponent.svelte";

    onMount(() => {
    });
</script>

<section>
    <h1>Home</h1>
    <SomeComponent/>
</section>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>