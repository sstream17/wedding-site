<script>
    import FaqCard from "../../components/FAQCard.svelte";
    import Seo from "../../components/SEO.svelte";
</script>

<Seo title="FAQ" />

<h1>FAQ</h1>

<FaqCard>
    <h2 slot="question">Where are the ceremony and reception held?</h2>
    <p slot="answer">
        Both the ceremony and reception will be at the Holthus Convention
        Center. The ceremony will be in Ballroom B starting at 4pm. A cocktail
        hour will be held in the lobby following the ceremony, with the
        reception starting at 6pm in Ballroom A.
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">What should I do if I cannot make it?</h2>
    <p slot="answer">
        You will be missed, but that's okay! If you cannot make it, please let
        us know in your RSVP you will not be attending.
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">What time should I arrive?</h2>
    <p slot="answer">
        The ceremony will start at 4pm. Guests may start arriving at 3:30pm.
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">Is parking free? Where can I park?</h2>
    <p slot="answer">
        Parking is free! There is plenty of parking outside the Holthus.
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">Are kids welcome?</h2>
    <p slot="answer">
        Absolutely! There will even be a kids buffet at dinner. Please be sure
        to put down how many kiddos will be coming with you!
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">Is there a hotel block for guests?</h2>
    <p slot="answer">
        Yes! Please visit the
        <a href="./wedding/travel">travel tab</a>
        for all the details about the hotel and how to book for the block of
        rooms.
    </p>
</FaqCard>

<FaqCard>
    <h2 slot="question">
        When is the RSVP deadline? Can I RSVP online or through mail?
    </h2>
    <p slot="answer">
        The RSVP deadline will be May 28th, 2022 (3 weeks before the wedding).
        You can RSVP on the website through the
        <a href="./wedding/rsvp">RSVP tab</a>
        or by mailing the insert you got with your invitation.
    </p>
</FaqCard>

<FaqCard hideHorizontalDivider="true">
    <h2 slot="question">If I still have questions, can I reach out to you?</h2>
    <p slot="answer">
        Yes! We are more than willing to answer questions. Feel free to call or
        text us.
    </p>
</FaqCard>

<style>
    p {
        text-align: center;
    }
</style>
