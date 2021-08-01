<script lang="ts">
    export let hideHorizontalDivider: boolean = false;
</script>

<div class="grid justify-content-center">
    <slot name="left" class="left" />
    <div class="divider-v" />
    <slot name="right" class="right" />
    {#if !hideHorizontalDivider}
        <div class="divider-h" />
    {/if}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        margin-bottom: 4rem;
    }

    .left {
        justify-self: end;
    }

    .divider-v {
        border-left: 1px solid white;
        height: 100px;
    }

    .right {
        justify-self: start;
        text-align: center;
    }

    .divider-h {
        display: none;
        border-bottom: 1px solid white;
        width: 200px;
    }

    @media screen and (max-width: 768px) {
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
        }

        .left {
            justify-self: center;
        }

        .divider-v {
            display: none;
        }

        .right {
            justify-self: center;
        }

        .divider-h {
            display: block;
        }
    }
</style>
