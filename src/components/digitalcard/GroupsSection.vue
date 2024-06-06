<template>
    <div class="container my-3 py-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Groups ~</span></p>
        <TeamBanner />
    </div>
</template>
<script>
import TeamBanner from '@/components/TeamBanner.vue'
export default {
    name: 'BrandSection',
    components: {
        TeamBanner
    },
}
</script>
<style></style>