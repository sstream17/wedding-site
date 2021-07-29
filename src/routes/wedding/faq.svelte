<script>
    import FaqCard from "../../components/FAQCard.svelte";
</script>

<h1>FAQ</h1>

<FaqCard
    q="Where are the ceremony and reception held?"
    a={`Both the ceremony and reception will be at the Holthus Convention Center.
        The ceremony will be in <room x> starting at 4pm.
        A cocktail hour will be held in the lobby following the ceremony,
        with the reception starting at 6pm in <room x>.`}
/>

<FaqCard
    q="What should I do if I cannot make it?"
    a={`You will be missed, but that's okay! If you cannot make it,
        please let us know in your RSVP you will not be attending.`}
/>

<FaqCard
    q="What time should I arrive?"
    a="The ceremony will start at 4pm. Guests may start arriving at 3:30pm."
/>

<FaqCard
    q="Is parking free? Where can I park?"
    a="Parking is free! There is plenty of parking outside the Holthus."
/>

<FaqCard
    q="Are kids welcome?"
    a="Absolutely! There will even be a kids buffet at dinner. Please be sure to put down how many kiddos will be coming with you!"
/>

<FaqCard
    q="Is there a hotel block for guests?"
    a="Yes! Please visit the travel tab on our website for all the details about the hotel and how to book for the block of rooms."
/>

<FaqCard
    q="When is the RSVP deadline? Can I RSVP online or through mail?"
    a={`The RSVP deadline will be May 28th, 2022 (3 weeks before the wedding).
        You can RSVP on the website through the RSVP tab or by mailing the insert you got with your invitation.`}
/>

<FaqCard
    q="If I still have questions, can I reach out to you?"
    a="Yes! We are more than willing to answer questions. Feel free to call or text us."
    hideHorizontalDivider="true"
/>
