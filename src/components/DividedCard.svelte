<div class="divided-card grid justify-content-center">
    <slot name="left" class="left" />
    <div class="divider-v" />
    <slot name="right" class="right" />
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        margin-bottom: 4rem;
    }

    .left {
        justify-self: end;
    }

    .divider-v {
        border-left: 1px solid white;
        height: 100px;
    }

    .right {
        justify-self: start;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
        }

        .left {
            justify-self: center;
        }

        .divider-v {
            display: none;
        }

        .right {
            justify-self: center;
        }
    }
</style>
