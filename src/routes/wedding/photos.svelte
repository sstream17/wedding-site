<h1>Photos</h1>

<div class="grid">
    <img
        class="img-1"
        src="./photos/katie+spencer1.jpg"
        alt="Katie and Spencer"
    />
    <img
        class="img-2"
        src="./photos/katie+spencer2.jpg"
        alt="Katie and Spencer"
    />
    <img
        class="img-3"
        src="./photos/katie+spencer3.jpg"
        alt="Katie and Spencer"
    />
</div>

<p>
    <a
        href="https://brittanymccoyphotography.client-gallery.com/gallery/katie-and-spencer/"
    >View or purchase more photos.</a>
</p>

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
