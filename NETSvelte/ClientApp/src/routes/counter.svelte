<script lang="ts">
    let currentCount: number = 0;
</script>

<h1>Counter</h1>

<p>This is a simple example of a React component.</p>

<p aria-live="polite">Current count: <strong>{currentCount}</strong></p>

<button class="btn btn-primary" on:click={() => currentCount++}>
    Increment
</button>
