<script lang="ts">
    export let name: string;
    export let role: string;
</script>

<style>
    .wedding-party-card {
        margin-bottom: 4rem;
        text-align: center;
    }
</style>

<div class="wedding-party-card">
    <h2>{name}</h2>
    <h3>{role}</h3>
    <slot></slot>
</div>