<script lang="ts">
    export let side: "left" | "right";
</script>

<div class="flower-rail {side}">
    <div class="flowers top" />
    <div class="flowers middle" />
    <div class="flowers bottom" />
</div>

<style>
    .flower-rail {
        position: fixed;
        top: 0;
        height: 100%;
        width: 20em;
        z-index: -10;
        --x-offset: -4%;
    }

    .left {
        left: var(--x-offset);
        transform: scaleX(-100%);
    }

    .right {
        right: var(--x-offset);
    }

    .flowers {
        background-image: url(/pink_flower_petals.png);
        background-size: cover;
        height: 35%;
    }

    .top {
        transform: scaleY(-100%);
    }

    .middle {
        transform: translateX(25%);
    }

    .bottom {
        transform: rotate(12deg);
    }

    @media screen and (max-width: 768px) {
        .flower-rail {
            width: 100%;
        }

        .flowers {
            height: 40%;
        }

        .left {
            display: none;
        }
    }
</style>
