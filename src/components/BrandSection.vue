<template>
    <div class="container my-3">
        <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Memberships ~</span></p>
        <div class="mb-5">
            <TeamBanner />
        </div>
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