<script lang="ts">
    import Seo from "../../../components/SEO.svelte";
    import WeddingPartyCard from "../../../components/WeddingPartyCard.svelte";
</script>

<Seo
    title="Wedding Party"
    description="Elissa Fuelberth, Eden Morris, Sam Wiles, Emily Wiles, Molli Curry, Lauren Nunez. Matthew Schaaf, Zak Keck, Syrus Bomberger, Nick Cowles, Chase Grossman, Drew Stream."
/>

<h1>Wedding Party</h1>
<div class="flex-row flex-wrap justify-content-around">
    <div class="flex-col">
        <WeddingPartyCard
            name="Elissa Fuelberth"
            role="Maid of Honor"
            img="/wedding_party/elissa.jpg"
        >
            <p>
                Elissa and Katie have been “sisters” from the very start. They
                met when they were just tiny babies and grew up together,
                sharing so many memories over the years. Some of their favorites
                are spending holidays together (Christmas in particular), and
                going on road trips to fun places!
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Eden Morris"
            role="Bridesmaid"
            img="/wedding_party/eden.jpg"
        >
            <p>
                Eden and Katie have been besties ever since they were babies.
                Some favorite memories that they share together are playing
                dress up and cooking in the kitchen when they were little, going
                on fun family vacations during the summer, pigging out on all
                the food they love to eat together and all the fun times in
                between!
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Sam Wiles"
            role="Bridesmaid"
            img="/wedding_party/sam.jpg"
        >
            <p>
                Sam and Katie were always the cousins that were so close they
                were like sisters. They spent the years always embarrassing
                themselves at family parties, or sitting and talking about life
                (their favorite)!
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Emily Wiles"
            role="Bridesmaid"
            img="/wedding_party/emily.jpg"
        >
            <p>
                Emily and Katie are cousins and have always been close over the
                years. The funniest memory they shared together was when Emily’s
                older cousin pushed Katie into a pile of leaves (on camera, of
                course) and all the memories they created when they went on
                their family trip to Wyoming!
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Molli Curry"
            role="Bridesmaid"
            img="/wedding_party/molli.jpg"
        >
            <p>
                Molli and Katie’s relationship has always been a wild one. Over
                the 15+ years of knowing each other, the memories have been
                nothing short of crazy adventures, like making “grass and berry
                soup” (ask them how to make it, you won’t regret it), sharing a
                locker in 6th grade, going through hot girl summer together, and
                all the fun in between!
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Lauren Nunez"
            role="Bridesmaid"
            img="/wedding_party/lauren.jpg"
        >
            <p>
                Lauren and Katie have been “BFFS4L” ever since they became next
                door neighbors over 17 years ago. A bunch of memories were made
                when they moved in together back in 2019 and adopted Miso, and
                also going to Hawaii and having fun there!
            </p>
        </WeddingPartyCard>
    </div>
    <div class="flex-col">
        <WeddingPartyCard
            name="Matthew Schaaf"
            role="Best Man"
            img="/wedding_party/matthew.jpg"
        >
            <p>
                Matthew and Spencer have been best friends for over 12 years
                after meeting in 6th grade. They shared many classes but had the
                most fun in band. Matthew’s best memories with Spencer come from
                the time they spent during middle school band camp at UNL.
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Zak Keck"
            role="Groomsman"
            img="/wedding_party/zak.jpg"
        >
            <p>
                Zak and Spencer met as freshman in college in the UNL Marching
                Band. After getting stuck sitting next to Spencer, what Zak
                thought would be the most annoying 13 hour bus ride of his life
                ended up giving him one of his closest friends. Spencer and Zak
                roomed together for a few years in college, and Zak takes credit
                for introducing Spencer to computer programming.
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Syrus Bomberger"
            role="Groomsman"
            img="/wedding_party/syrus.jpg"
        >
            <p>
                Syrus and Spencer went to high school together and always had a
                similar friend group. They became closer friends after sharing
                computer science classes in college. Syrus and Spencer competed
                together multiple times at the UNL Hackathon and won prizes for
                their acclaimed programs RecycloBot and coder_royale.
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Nick Cowles"
            role="Groomsman"
            img="/wedding_party/nick.jpg"
        >
            <p>
                Nick and Spencer became good friends in high school marching
                band. Spencer would often make goofy jokes while waiting for
                instructions from Mr. Metteer. Nick could never hold back
                laughter long enough to avoid attention, and would get called
                out in front of the entire band. They became known for this and
                it was increasingly challenging to avoid the constant
                embarrassment from Mr. Metteer.
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Chase Grossman"
            role="Groomsman"
            img="/wedding_party/chase.jpg"
        >
            <p>
                As Spencer’s older cousin, Chase has known Spencer his entire
                life. They would spend countless days in the summer playing
                football, basketball, and of course Xbox. Chase and Spencer have
                always been extremely close, you may have even mistaken them to
                be brothers.
            </p>
        </WeddingPartyCard>
        <WeddingPartyCard
            name="Drew Stream"
            role="Groomsman"
            img="/wedding_party/drew.jpg"
        >
            <p>
                Drew is Spencer’s younger brother, and has always looked up to
                Spencer as his greatest role model. They always had a lot of fun
                together on family vacations to Colorado, Tennessee, and
                amusement parks around the country. Drew may be the cooler of
                the two brothers, but don’t let their differences distract you
                from their love for each other.
            </p>
        </WeddingPartyCard>
    </div>
</div>

<style>
    p {
        max-width: 24em;
        margin-left: auto;
        margin-right: auto;
    }
</style>
