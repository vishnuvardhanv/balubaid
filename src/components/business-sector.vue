<template>
  <div class="business-sector">
    <h2 class="text-center pt-5 pb-5">Business Sectors</h2>
    <div class="row">
      <div class="col-sm-4 pb-5" v-for="(set, index) in dataSet" :key="index">
        <router-link :to="`/business-sector/${set.slug}`">
          <b-card class="border-0 text-primary" :title="set.title" :img-src="set.image" :img-alt="set.image" img-top>
          </b-card>
        </router-link>
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
        image: require('./../assets/images/PHOTO-2019-06-28-13-27-10.jpg'),
        slug: 'foundary',
        title: 'Foundry'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-28-46.jpg'),
        slug: 'machineShop',
        title: 'Machine Shop'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-28-56.jpg'),
        slug: 'realEstate',
        title: 'Real Estate'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-29-20.jpg'),
        slug: 'travelAndTourism',
        title: 'Travel and Tourism'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-30-06.jpg'),
        slug: 'realBusiness',
        title: 'Retail Business'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-30-51.jpg'),
        slug: 'tradingBusiness',
        title: 'Trading Business'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  padding-left: 0;
}
.card-img-top {
  width: 300px;
  height: 200px;
}
.card {
  cursor: pointer;
}
</style>


