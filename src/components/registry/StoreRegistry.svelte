<script lang="ts">
    export let title: string;
    export let url: string;
</script>

<h2>{title}</h2>

<div class="flex-row justify-content-around flex-wrap">
    <a href={url}>
        <img
            src="./registry/target1.png"
            alt={`${title} registry item`}
            width="200px"
        />
    </a>
    <a href={url}>
        <img
            src="./registry/target2.png"
            alt={`${title} registry item`}
            width="200px"
        />
    </a>
    <a href={url}>
        <img
            src="./registry/target3.png"
            alt={`${title} registry item`}
            width="200px"
        />
    </a>
</div>
