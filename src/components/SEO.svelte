<script lang="ts">
    export let title: string = "";
    export let description: string;

    let formattedTitle = "Katherine & Spencer's Wedding";

    if (title) {
        formattedTitle = `${title} - ${formattedTitle}`;
    }
</script>

<svelte:head>
    <title>{formattedTitle}</title>
    <meta name="description" content="June 18, 2022. York, NE. {description}" />
</svelte:head>
