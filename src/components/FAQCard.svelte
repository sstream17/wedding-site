<script lang="ts">
    export let q: string;
    export let a: string;
    export let hideHorizontalDivider: boolean = false;
</script>

<div class="grid justify-content-center">
    <slot name="question" class="question">{q}</slot>
    <div class="divider-v" />
    <slot name="answer" class="answer">{a}</slot>
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

    .question {
        justify-self: end;
    }

    .divider-v {
        border-left: 1px solid white;
        height: 100px;
    }

    .answer {
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

        .question {
            justify-self: center;
        }

        .divider-v {
            display: none;
        }

        .answer {
            justify-self: center;
        }

        .divider-h {
            display: block;
        }
    }
</style>
