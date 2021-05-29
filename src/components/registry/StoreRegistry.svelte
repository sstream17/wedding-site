<script lang="ts">
    import { onMount } from 'svelte';

    export let title: string;
    export let url: string;

    onMount(async () => {
        const response = await fetch(url);

        const html = await response.text();

        console.log(html);
    });
</script>

<h1>{title}</h1>