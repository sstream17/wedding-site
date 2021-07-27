<script lang="ts">
    export let q: string;
    export let a: string;
    export let hideHorizontalDivider: boolean = false;
</script>

<div class="grid justify-content-center">
    <h2 class="question">{q}</h2>
    <div class="divider-v" />
    <p class="answer">{a}</p>
    {#if !hideHorizontalDivider}
        <div class="divider-h" />
    {/if}
</div>

<style>
    p {
        text-align: center;
    }

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
