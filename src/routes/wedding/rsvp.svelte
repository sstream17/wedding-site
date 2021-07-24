<script lang="ts">
    import { onMount } from "svelte";

    let name: string;
    let numberAdults: number = 1;
    let numberChildren: number = 0;
    let notes: string;
    let submitted: boolean = false;

    const handleSubmit = async () => {
        const email = {
            name: name,
            numberAdults: numberAdults,
            numberChildren: numberChildren,
            additionalNotes: notes,
        };

        const options = {
            method: "POST",
            body: JSON.stringify(email),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(
            "https://katherineandspencerweddingrsvp.azurewebsites.net/api/WeddingEmail",
            options
        );

        if (response.ok) {
            localStorage.setItem("rsvp", "true");
            submitted = true;
        }
    };

    onMount(() => {
        submitted = !!localStorage.getItem("rsvp");
    });
</script>

<h1>RSVP</h1>

{#if !submitted}
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
            <textarea
                id="notes"
                placeholder="Please include the names of all guests"
                rows="4"
                bind:value={notes}
            />

            <div />
            <input type="submit" value="Send" />

            <div />
            <div>* Required</div>
        </div>
    </form>
{:else}
    <h2>
        Thank you for your RSVP. We look forward to you joining us on our
        special day!
    </h2>
{/if}

<style>
    label {
        text-align: end;
    }

    textarea {
        resize: vertical;
    }

    .grid {
        display: grid;
        grid-template-columns: 2fr 3fr;
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
