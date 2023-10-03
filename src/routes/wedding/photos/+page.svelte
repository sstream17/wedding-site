<script>
    import Seo from "../../../components/SEO.svelte";
</script>

<Seo title="Photos" description="View photos of Katherine and Spencer." />

<h1>Photos</h1>

<h2>Wedding</h2>

<div class="grid">
    <div class="zoom img-4">
        <img src="/photos/katie+spencer4.jpg" alt="Katie and Spencer" />
    </div>
    <div class="zoom img-5">
        <img src="/photos/wedding_party1.jpg" alt="The wedding party" />
    </div>
    <div class="zoom img-6">
        <img src="/photos/katie+spencer5.jpg" alt="Katie and Spencer" />
    </div>
</div>

<p>
    <a
        href="https://brittanymccoyphotography.client-gallery.com/gallery/stream/"
        >View more photos.</a
    >
</p>

<h2>Engagement</h2>

<div class="grid">
    <div class="zoom img-1">
        <img src="/photos/katie+spencer1.jpg" alt="Katie and Spencer" />
    </div>
    <div class="zoom img-2">
        <img src="/photos/katie+spencer2.jpg" alt="Katie and Spencer" />
    </div>
    <div class="zoom img-3">
        <img src="/photos/katie+spencer3.jpg" alt="Katie and Spencer" />
    </div>
</div>

<p>
    <a
        href="https://brittanymccoyphotography.client-gallery.com/gallery/katie-and-spencer/"
        >View more engagement photos.</a
    >
</p>

<style>
    .zoom {
        position: relative;
        overflow: hidden;
        padding: 50%;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        will-change: transform;
        object-fit: cover;
        transition: transform 1s;
    }

    img:hover {
        transform: scale(1.1);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 1em;
    }

    .img-1 {
        grid-column: 1 / span 4;
        grid-row: 1 / span 3;
    }

    .img-2 {
        grid-column: 5 / span 4;
        grid-row: 1 / span 6;
    }

    .img-3 {
        grid-column: 1 / span 4;
        grid-row: 4 / span 3;
    }

    .img-4 {
        grid-column: 1 / span 4;
        grid-row: 1 / span 6;
    }

    .img-5 {
        grid-column: 5 / span 4;
        grid-row: 1 / span 3;
    }

    .img-6 {
        grid-column: 5 / span 4;
        grid-row: 4 / span 3;
    }

    @media screen and (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .img-1 {
            grid-column: 1 / span 4;
            grid-row: 1 / span 3;
        }

        .img-2 {
            grid-column: 1 / span 4;
            grid-row: 4 / span 6;
        }

        .img-3 {
            grid-column: 1 / span 4;
            grid-row: 10 / span 3;
        }
    }
</style>
