<script lang="ts">
    import ClosedRsvp from "../../components/rsvp/ClosedRSVP.svelte";
    import Rsvp from "../../components/rsvp/RSVP.svelte";
    import Seo from "../../components/SEO.svelte";

    const deadline = new Date(2022, 5, 28);
    const today = new Date();

    let continueToForm: boolean = false;
</script>

<Seo title="RSVP" description="Send your RSVP right from our website." />

<h1>RSVP</h1>

{#if !continueToForm && today > deadline}
    <ClosedRsvp bind:continueToForm />
{:else}
    <Rsvp />
{/if}
