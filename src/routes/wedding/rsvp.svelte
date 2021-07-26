<script lang="ts">
    import { onMount } from "svelte";

    let name: string;
    let emailAddress: string;
    let numberAdults: number = 1;
    let numberChildren: number = 0;
    let notes: string;

    let submitted: boolean = false;
    let error: boolean = false;

    const handleSubmit = async () => {
        error = false;

        const email = {
            name: name,
            emailAddress: emailAddress,
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
            return;
        }

        error = true;
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

            <label for="email">Your email address*</label>
            <input id="email" type="text" required bind:value={emailAddress} />

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

            <div />
            <div class="alert" class:error>
                We were unable to send your RSVP. Please try again later.
            </div>
        </div>
    </form>
    <p class="center-text">
        Send your RSVP electronically above, or return the card you received in
        the mail to:
    </p>
    <div class="address center-text">
        <h3>Katie Wiles</h3>
        <p>5131 Country Hill Rd</p>
        <p>Lincoln, NE 68516</p>
    </div>
{:else}
    <h2>
        Thank you for your RSVP. We look forward to you joining us on our
        special day!
    </h2>

    <p class="center-text">
        If you need to make changes to your RSVP or have any questions, email
        <a
            href="mailto:rsvp@katherineandspencer.com"
        >rsvp@katherineandspencer.com</a>.
    </p>
{/if}

<style>
    .address {
        line-height: 1;
    }

    .center-text {
        text-align: center;
    }

    .alert {
        color: red;
        display: none;
    }

    .error {
        display: block;
    }

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
