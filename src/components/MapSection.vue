<template>
    <div>
        <div ref="map" style="width: 100%; height: 500px;"></div>
    </div>
</template>
  
  <script>
export default {
    name: 'MapComponent',
    data() {
        return {
            map: null,
            google: null,
        };
    },
    mounted() {
        this.initGoogleMaps();
    },
    methods: {
        initGoogleMaps() {
            if (window.google) {
                this.google = window.google;
                this.initMap();
            } else {
                window.addEventListener('google-maps-api-loaded', () => {
                    this.google = window.google;
                    this.initMap();
                });
            }
        },
        initMap() {
            const location = { lat: 28.6312, lng: 77.1348 };
            const map = new this.google.maps.Map(this.$refs.map, {
                zoom: 15,
                center: location,
            });
            new this.google.maps.Marker({
                position: location,
                map: map,
            });
        },
    },
};
</script>