<template>
    <div class="  my-3 py-3">
        <div class="text-center pb-3">
            <h1>Our Features <br> Build for entrepreneurs</h1>
        </div>
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2">
                <div class="col" v-for="(feature, index) in features" :key="index">
                    <div class="card flex-md-row align-items-center p-2">
                        <div class="p-3">
                            <img :src="feature.img" style="width: 50px;" alt="">
                            <!-- <i class="bi text-primary rounded-3 fs-4 shadow p-3" :class="feature.icon"></i> -->
                        </div>
                        <div class="d-flex flex-column align-items-start ">
                            <small class="fw-bold text-capitalize">{{ feature.title }}</small>
                            <small>{{ feature.description }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OurFeatures',
    data() {
        return {
            features: [
                {
                    id: 1,
                    icon: 'bi-building',
                    img:'img/features/custom.png',
                    title: 'Custom designs',
                    description: 'Choose from more than 60 different fonts, over 3000 icons custom color, images and videos.'
                },
                {
                    id: 2,
                    icon: 'bi-building',
                    img:'img/features/gear.png',
                    title: 'Useful integrations',
                    description: 'Integrate calendly, hubspot, salesforce, spotify, and many more.'
                },
              
               
                {
                    id: 5,
                    icon: 'bi-building',
                    img:'img/features/uniform.png',
                    title: 'Uniform templates',
                    description: 'Provide templates for your team. So there is no extra effort for additional team members.'
                },
                
                {
                    id: 7,
                    icon: 'bi-building',
                    img:'img/features/block.png',
                    title: 'No app required',
                    description: 'Neither you nor your customers need an app to use your spreadly business card.'
                },
                {
                    id: 8,
                    icon: 'bi-building',
                    title: 'Data enrichment',
                    img:'img/features/data.png',
                    description: 'We enrich your contacts with meaningful information so that you are always one step ahead.'
                },
                {
                    id: 3,
                    icon: 'bi-building',
                    img:'img/features/wallet.png',
                    title: 'Add to apple wallet / google wallet',
                    description: 'Save your digital business card within your google wallet or apple wallet on your iphone.'
                },
                {
                    id: 4,
                    icon: 'bi-building',
                    img:'img/features/lead.png',
                    title: 'lead capture',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 6,
                    icon: 'bi-building',
                    img:'img/features/users.png',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>