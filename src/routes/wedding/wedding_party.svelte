<script lang="ts">
    import WeddingPartyCard from '../../components/WeddingPartyCard.svelte';
</script>

<h1>Wedding Party</h1>
<div class="flex-row justify-content-around">
    <div class="flex-col">
        <WeddingPartyCard
            name="Elissa Fuelberth"
            role="Maid of Honor">
            <p>The bride's best friend</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Eden Gose"
            role="Bridesmaid">
            <p>Friend of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Sam Wiles"
            role="Bridesmaid">
            <p>Cousin of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Emily Wiles"
            role="Bridesmaid">
            <p>Cousin of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Molli Curry"
            role="Bridesmaid">
            <p>Friend of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Lauren Nunez"
            role="Bridesmaid">
            <p>Friend of the bride</p>
        </WeddingPartyCard>
    </div>
    <div class="flex-col">
        <WeddingPartyCard
            name="Matthew Schaaf"
            role="Best Man">
            <p>The groom's best friend</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Zak Keck"
            role="Groomsman">
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Syrus Bomberger"
            role="Groomsman">
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Nicholas Cowles"
            role="Groomsman">
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Chase Grossman"
            role="Groomsman">
            <p>Cousin of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Drew Stream"
            role="Groomsman">
            <p>Brother of the groom</p>
        </WeddingPartyCard>
    </div>
</div>