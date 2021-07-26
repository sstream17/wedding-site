<script lang="ts">
    import WeddingPartyCard from "../../components/WeddingPartyCard.svelte";
</script>

<h1>Wedding Party</h1>
<div class="flex-row flex-wrap justify-content-around">
    <div class="flex-col">
        <WeddingPartyCard
            name="Elissa Fuelberth"
            role="Maid of Honor"
            img="./wedding_party/elissa.jpg"
        >
            <p>The bride's best friend</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Eden Gose"
            role="Bridesmaid"
            img="./wedding_party/eden.jpg"
        >
            <p>Friend of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Sam Wiles"
            role="Bridesmaid"
            img="./wedding_party/sam.jpg"
        >
            <p>Cousin of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Emily Wiles"
            role="Bridesmaid"
            img="./wedding_party/emily.jpg"
        >
            <p>Cousin of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Molli Curry"
            role="Bridesmaid"
            img="./wedding_party/molli.jpg"
        >
            <p>Friend of the bride</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Lauren Nunez"
            role="Bridesmaid"
            img="./wedding_party/lauren.jpg"
        >
            <p>Friend of the bride</p>
        </WeddingPartyCard>
    </div>
    <div class="flex-col">
        <WeddingPartyCard
            name="Matthew Schaaf"
            role="Best Man"
            img="./wedding_party/matthew.jpg"
        >
            <p>The groom's best friend</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Zak Keck"
            role="Groomsman"
            img="./wedding_party/zak.jpg"
        >
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Syrus Bomberger"
            role="Groomsman"
            img="./wedding_party/syrus.jpg"
        >
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Nicholas Cowles"
            role="Groomsman"
            img="./wedding_party/nicholas.jpg"
        >
            <p>Friend of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Chase Grossman"
            role="Groomsman"
            img="./wedding_party/chase.jpg"
        >
            <p>Cousin of the groom</p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Drew Stream"
            role="Groomsman"
            img="./wedding_party/drew.jpg"
        >
            <p>Brother of the groom</p>
        </WeddingPartyCard>
    </div>
</div>
