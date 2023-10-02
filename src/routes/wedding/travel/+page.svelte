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
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.9424231718494!2d-97.59572702675875!3d40.82922832654488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x879745212796c751%3A0xa4a002d0b800ffa!2sHolthus%20Convention%20Center!5e0!3m2!1sen!2sus!4v1626826245756!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0;"
        title="Holthus Convention Center"
        allowfullscreen=""
        loading="lazy"
    />
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
    <a href="https://g.page/HamptonInnYork?share">
        <img
            id="hampton-inn-img"
            src="/travel/hampton_inn.jpg"
            alt="Hampton Inn York, NE"
        />
    </a>
</div>

<p>
    The hotel is just half a mile south of the Holthus Convention Center. Rooms
    are availabe for reservation between the dates of June 17, 2022 and June 19,
    2022. Reservations must be made before May 19, 2022.
</p>

<style>
    iframe {
        margin: 0 auto;
    }

    .travel-card {
        align-items: center;
        font-size: 20px;
    }

    .travel-card,
    .travel-card h3,
    .travel-card a {
        text-align: start !important;
        line-height: 1;
    }

    .travel-card a {
        display: contents;
    }

    .travel-card p {
        margin: 0.5em 0;
    }

    #hampton-inn-img {
        max-width: 50%;
    }
</style>
