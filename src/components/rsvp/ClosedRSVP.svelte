<script lang="ts">
    export let continueToForm: boolean = false;

    const handleClick = () => {
        continueToForm = true;
    };
</script>

Sorry
<input type="submit" value="I understand" on:click={handleClick} />
