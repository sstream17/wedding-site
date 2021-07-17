<script lang="ts">
    export let name: string;
    export let role: string;
</script>

<div class="wedding-party-card">
    <h2>{name}</h2>
    <h3>{role}</h3>
    <slot />
</div>

<style>
    .wedding-party-card {
        margin-bottom: 4rem;
        text-align: center;
    }
</style>
