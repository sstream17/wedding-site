<script lang="ts">
    export let title: string;
    export let url: string;
    export let images: string[];
</script>

<h2>{title}</h2>

<div class="flex-row justify-content-around flex-wrap">
    {#each images as src}
        <a href={url}>
            <img {src} alt={`${title} registry item`} width="200px" />
        </a>
    {/each}
</div>
