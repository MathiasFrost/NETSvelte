<script lang="ts">
    interface WeatherForecast {
        date: string;
        temperatureC: number;
        temperatureF: number;
        summary: string;
    }

    async function fetchWeatherData(): Promise<WeatherForecast[]> {
        const response = await fetch("/WeatherForecast");
        return await response.json();
    }
</script>

<h1 id="tableLabel">Weather forecast</h1>

<p>This component demonstrates fetching data from the server.</p>

{#await fetchWeatherData()}
    <p><em>Loading...</em></p>
{:then forecasts}
    <table class="table table-striped" aria-labelledby="tableLabel">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            {#each forecasts as forecast}
                <tr>
                    <td>{forecast.date}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/await}
