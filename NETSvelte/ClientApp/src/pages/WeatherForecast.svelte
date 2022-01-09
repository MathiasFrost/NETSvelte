<script lang="ts">
    import {onMount} from "svelte";
    import type {WeatherForecast} from "$models/weatherForecast";

    let forecasts: WeatherForecast[] = [];

    onMount(async () => {
        const res = await fetch("/weatherforecast", {
            method: "GET"
        });
        if (res.ok) forecasts = await res.json();
        else console.warn("HTTP request failed");
    });
</script>

<h1>Weather Forecast</h1>

<table>
    <thead>
    <tr>
        <th>Date</th>
        <th>Celcius</th>
        <th>Fahrenheit</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    {#each forecasts as forecast}
        <tr>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary ?? "no summary"}</td>
        </tr>
    {/each}
    </tbody>
</table>
