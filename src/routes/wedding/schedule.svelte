<script>
    import DividedCard from "../../components/DividedCard.svelte";
    import Seo from "../../components/SEO.svelte";
</script>

<Seo
    title="Schedule"
    description="View the schedule of our wedding. Ceremony at 4pm. Reception at 6pm."
/>

<h1>Schedule</h1>
<p>
    Join us at the Holthus Convention Center in York. Below you will find what
    to expect for our wedding night!
</p>

<DividedCard>
    <div slot="left">
        <h2>Ceremony</h2>
        <h3>Saturday, June 18, 2022</h3>
        <h4>4:00 pm</h4>
    </div>
    <div slot="right">
        <img src="./schedule/Rings.svg" alt="Ceremony" />
        <p>
            The ceremony will be held in Ballroom B-E. You may arrive as early
            as 3:30pm. There will be plenty of parking outside the Holthus.
        </p>
    </div>
</DividedCard>

<DividedCard>
    <div slot="left">
        <h2>Cocktail Hour</h2>
        <h3>Saturday, June 18, 2022</h3>
        <h4>5:00 pm</h4>
    </div>
    <div slot="right">
        <img src="./schedule/Cheers.svg" alt="Cocktail Hour" />
        <p>
            A cocktail hour will be held in the Holthus lobby between the
            ceremony and the reception. Feel free to grab a drink and mingle
            with other guests!
        </p>
    </div>
</DividedCard>

<DividedCard hideHorizontalDivider="true">
    <div slot="left">
        <h2>Reception</h2>
        <h3>Saturday, June 18, 2022</h3>
        <h4>6:00 pm</h4>
    </div>
    <div slot="right">
        <img src="./schedule/Cake.svg" alt="Reception" />
        <p>
            The reception will start at 6pm in Ballroom A. Follow the signs in
            the lobby to find your way there for dinner, dancing, and cake!
        </p>
    </div>
</DividedCard>

<style>
    img {
        display: block;
        height: 50px;
        margin: 0 auto;
    }

    p {
        text-align: center;
    }
</style>
