<script lang="ts">
    export let onClick;
    export let collapsed: boolean;
</script>

<div class="hamburger" class:show={!collapsed} role="button" on:click={onClick}>
    <div class="icon" />
</div>

<style>
    .hamburger {
        cursor: pointer;
        display: none;
        z-index: 11;
    }

    .icon {
        width: 2.5rem;
        height: 4px;
        background: #fff;
        border-radius: 4px;
        transition: all 0.75s;
    }

    .icon::before,
    .icon::after {
        content: "";
        position: absolute;
        display: flex;
        width: 2.5rem;
        height: 4px;
        background: #fff;
        border-radius: 4px;
        transition: all 0.75s;
    }

    .icon::before {
        transform: translateY(-10px);
    }

    .icon::after {
        transform: translateY(10px);
    }

    .hamburger.show .icon {
        background: transparent;
    }
    .hamburger.show .icon::before {
        transform: rotate(45deg);
    }
    .hamburger.show .icon::after {
        transform: rotate(-45deg);
    }

    @media screen and (max-width: 768px) {
        .hamburger {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            transition: all 0.75s;
        }
    }
</style>
