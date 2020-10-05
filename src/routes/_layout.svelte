<script lang="ts">
    export let segment: string;
</script>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 56em;
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<main class:main={segment !== 'wedding'}>
    <slot />
</main>
