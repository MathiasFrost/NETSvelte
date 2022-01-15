<script lang="ts">
    import {onMount} from "svelte";
    import SomeComponent from "$components/SomeComponent.svelte";
    
    onMount(async () => {
        const res = await fetch("/WeatherForecast", {
            method: "GET"
        });
        console.log(res);
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