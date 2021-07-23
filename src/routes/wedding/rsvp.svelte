<script lang="ts">
    let name: string;
    let numberAdults: number = 1;
    let numberChildren: number = 0;
    let notes: string;

    const handleSubmit = () => {
        console.log(`submitting ${name} for ${numberAdults}`);
    };
</script>

<h1>RSVP</h1>

<form on:submit|preventDefault={handleSubmit}>
    <div class="grid">
        <label for="name">Your name*</label>
        <input id="name" type="text" required bind:value={name} />

        <label for="adults">How many adults including yourself?*</label>
        <input
            id="adults"
            type="number"
            min="1"
            required
            bind:value={numberAdults}
        />

        <label for="children">How many children?*</label>
        <input
            id="children"
            type="number"
            min="0"
            required
            bind:value={numberChildren}
        />

        <label for="notes">Any additional notes</label>
        <textarea id="notes" bind:value={notes} />

        <div />
        <input type="submit" value="Send" />

        <div />
        <div>* Required</div>
    </div>
</form>

<style>
    label {
        text-align: end;
    }

    textarea {
        resize: vertical;
    }

    .grid {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 1em 1em;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
        width: max-content;
    }

    @media screen and (max-width: 768px) {
        label {
            text-align: start;
        }

        input,
        textarea {
            margin-bottom: 1em;
        }

        .grid {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }
</style>
