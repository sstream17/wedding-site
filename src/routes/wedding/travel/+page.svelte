<script>
    import Seo from "../../../components/SEO.svelte";
</script>

<Seo
    title="Travel"
    description="The ceremony and reception will be held at the Holthus Convention Center. Book your hotel reservation at the Hampton Inn York."
/>

<h1>Travel</h1>
<h2>Ceremony & Reception</h2>

<div class="travel-card flex-row justify-content-around flex-wrap">
    <div>
        <h3>Holthus Convention Center</h3>
        <p>3130 Holen Ave</p>
        <p>York, NE 68467</p>
    </div>
    <img src="/travel/holthus.jpg" alt="Holthus Convention Center" />
</div>

<p>
    The wedding ceremony, cocktail hour, and reception will be held at the
    Holthus Convention Center in York, Nebraska.
</p>

<h2>Hotel</h2>
<div class="travel-card flex-row justify-content-around flex-wrap">
    <div>
        <h3>Hampton Inn York</h3>
        <p>309 W David Dr</p>
        <p>York, NE 68467</p>
    </div>
    <img src="/travel/hampton_inn.jpg" alt="Hampton Inn York, NE" />
</div>

<p>
    The hotel is just half a mile south of the Holthus Convention Center. Rooms
    are availabe for reservation between the dates of June 17, 2022 and June 19,
    2022. Reservations must be made before May 19, 2022.
</p>

<style>
    .travel-card {
        align-items: center;
        font-size: 20px;
    }

    .travel-card,
    .travel-card h3 {
        text-align: start !important;
        line-height: 1;
    }

    .travel-card p {
        margin: 0.5em 0;
    }

    .travel-card img {
        max-width: 50%;
    }
</style>
