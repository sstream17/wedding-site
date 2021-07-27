<script lang="ts">
    export let q: string;
    export let a: string;
</script>

<div class="flex-row flex-wrap justify-content-center align-items-baseline">
    <h2>{q}</h2>
    <div class="divider" />
    <p>{a}</p>
</div>

<style>
    p {
        text-align: center;
    }

    .divider {
        border-left: 1px solid white;
        height: 200px;
        transform: translate(0, 50%);
    }
</style>
