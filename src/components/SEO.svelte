<script lang="ts">
    export let title: string = "";

    let formattedTitle = "Katherine & Spencer's Wedding";

    if (title) {
        formattedTitle = `${title} - ${formattedTitle}`;
    }
</script>

<svelte:head>
    <title>{formattedTitle}</title>
</svelte:head>
