<script lang="ts">
    import {someFunction} from "$services/functions";
    import type {WeatherForecast} from "$models/weatherForecast";

    let someVar: WeatherForecast = {summary: someFunction(), date: new Date(), temperatureC: -10, temperatureF: 0};
</script>

<div>
    <h5>{someVar.summary}</h5>
</div>

<style lang="scss">
  h5 {
    text-align: center;
  }
</style>