<script lang="ts">
    import StoreRegistry from "../../components/registry/StoreRegistry.svelte";
    import Seo from "../../components/SEO.svelte";
</script>

<Seo title="Registry" />

<h1>Registry</h1>

<StoreRegistry
    title="Bed Bath & Beyond"
    url="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549824664?selectedRLVFilters=_recommended"
    images={['./registry/bedbathandbeyond1.png', './registry/bedbathandbeyond2.png', './registry/bedbathandbeyond3.png']}
/>
<StoreRegistry
    title="Target"
    url="https://www.target.com/gift-registry/giftgiver?registryId=ef3b88706ae34d38a65c6cc71536b129&type=WEDDING"
    images={['./registry/target1.png', './registry/target2.png', './registry/target3.png']}
/>
<StoreRegistry
    title="Wayfair"
    url="https://www.wayfair.com/registry/wedding/990aa1d2-7742-43a0-b5d4-8541194d749c"
    images={['./registry/wayfair1.jpg', './registry/wayfair2.jpg', './registry/wayfair3.jpg']}
/>
