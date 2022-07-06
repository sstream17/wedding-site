<script>
    import DividedCard from "../../components/DividedCard.svelte";
    import Seo from "../../components/SEO.svelte";
</script>

<Seo title="FAQ" description="Frequently asked questions about our wedding." />

<h1>FAQ</h1>

<DividedCard>
    <h2 slot="left">Where are the ceremony and reception held?</h2>
    <p slot="right">
        Both the ceremony and reception will be at the Holthus Convention
        Center. The ceremony will be in Ballroom B-E starting at 4pm. A cocktail
        hour will be held in the lobby following the ceremony, with the
        reception starting at 6pm in Ballroom A.
    </p>
</DividedCard>

<DividedCard>
    <h2 slot="left">What should I do if I cannot make it?</h2>
    <p slot="right">
        You will be missed, but that's okay! If you cannot make it, please let
        us know in your RSVP you will not be attending.
    </p>
</DividedCard>

<DividedCard>
    <h2 slot="left">What time should I arrive?</h2>
    <p slot="right">
        The ceremony will start at 4pm. Guests may start arriving at 3:30pm.
    </p>
</DividedCard>

<DividedCard>
    <h2 slot="left">Is parking free? Where can I park?</h2>
    <p slot="right">
        Parking is free! There is plenty of parking outside the Holthus.
    </p>
</DividedCard>

<DividedCard>
    <h2 slot="left">Are kids welcome?</h2>
    <p slot="right">
        Absolutely! There will even be a kids buffet at dinner. Please be sure
        to put down how many kiddos will be coming with you!
    </p>
</DividedCard>

<DividedCard>
    <h2 slot="left">Is there a hotel block for guests?</h2>
    <p slot="right">
        Yes! Please visit the
        <a href="./wedding/travel">travel tab</a>
        for all the details about the hotel and how to book for the block of
        rooms.
    </p>
</DividedCard>

<DividedCard hideHorizontalDivider="true">
    <h2 slot="left">If I still have questions, can I reach out to you?</h2>
    <p slot="right">
        Yes! We are more than willing to answer questions. Feel free to call or
        text us.
    </p>
</DividedCard>

<style>
    p {
        text-align: center;
    }
</style>
