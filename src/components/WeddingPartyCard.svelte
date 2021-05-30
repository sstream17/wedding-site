<script lang="ts">
    export let name: string;
    export let role: string;
    export let img: string;
</script>

<div class="wedding-party-card">
    <img class="circle-img" src={img} alt={name} />
    <h2>{name}</h2>
    <h3>{role}</h3>
    <slot />
</div>

<style>
    .wedding-party-card {
        margin-bottom: 4rem;
        text-align: center;
    }

    .circle-img {
        --circle-diameter: 200px;
        border-radius: 50%;
        height: var(--circle-diameter);
        width: var(--circle-diameter);
    }
</style>
