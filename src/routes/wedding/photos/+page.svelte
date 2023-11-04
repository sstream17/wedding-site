<script>
    import Seo from "../../../components/SEO.svelte";
</script>

<Seo title="Photos" description="View photos of Katherine and Spencer." />

<h1>Photos</h1>

<h2>Wedding</h2>

<div class="flex-row flex-wrap photo-grid">
    <div class="zoom">
        <img src="/photos/katie+spencer4.jpg" alt="Katie and Spencer" />
    </div>
    <div class="flex-col photo-stack">
        <div class="zoom">
            <img src="/photos/wedding_party1.jpg" alt="The wedding party" />
        </div>
        <div class="zoom">
            <img src="/photos/katie+spencer5.jpg" alt="Katie and Spencer" />
        </div>
    </div>
</div>

<p>
    <a
        href="https://brittanymccoyphotography.client-gallery.com/gallery/stream/"
        >View more photos.</a
    >
</p>

<h2>Engagement</h2>

<div class="flex-row flex-wrap photo-grid">
    <div class="flex-col photo-stack">
        <div class="zoom">
            <img src="/photos/katie+spencer1.jpg" alt="Katie and Spencer" />
        </div>
        <div class="zoom">
            <img src="/photos/katie+spencer2.jpg" alt="Katie and Spencer" />
        </div>
    </div>
    <div class="zoom">
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
    * {
        --image-size: 400px;
    }

    .photo-grid {
        gap: 1em;
        min-height: 70vh;
    }

    .photo-grid > * {
        flex-basis: var(--image-size);
        min-height: var(--image-size);
        flex-grow: 1;
        flex-shrink: 1;
    }

    .photo-stack {
        gap: 1em;
    }

    .photo-stack > * {
        flex-basis: var(--image-size);
    }

    .zoom {
        position: relative;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        will-change: transform;
        transition: transform 1s;
    }

    img:hover {
        transform: scale(1.1);
    }
</style>
