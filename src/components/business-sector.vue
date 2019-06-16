<template>
  <div class="business-sector">
    <h2 class="text-center pt-5 pb-5">Business Sectors</h2>
    <div class="row">
      <div class="col-sm-4 pb-5" v-for="(set, index) in dataSet" :key="index">
        <b-card class="border-0 text-primary" :title="set.title" :img-src="set.image" :img-alt="set.image" img-top>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'businessSector',
  data: function() {
    return {
      dataSet: [{
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/financial-services-home.jpg'),
        title: 'Financial Services'
      }, {
        image: require('./../assets/images/real-estate-home.jpg'),
        title: 'Real Estate'
      }, {
        image: require('./../assets/images/fun-land-slider.jpg'),
        title: 'Entertainment'
      }, {
        image: require('./../assets/images/industrial-home.jpg'),
        title: 'Industrial'
      }, {
        image: require('./../assets/images/affliates-home.jpg'),
        title: 'Affiliates'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  padding-left: 0;
}
</style>


