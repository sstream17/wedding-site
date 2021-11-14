<script lang="ts">
    export let continueToForm: boolean = false;

    const onClick = () => {
        continueToForm = true;
    };
</script>

Sorry
<input type="submit" value="I understand" on:click={onClick} />
