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
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-05.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-06 2.jpg'),
        title: 'Financial Services'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-06.jpg'),
        title: 'Real Estate'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-07 2.jpg'),
        title: 'Entertainment'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-07.jpg'),
        title: 'Industrial'
      }, {
        image: require('./../assets/images/PHOTO-2019-06-15-23-50-08.jpg'),
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
.card-img-top {
  width: 300px;
  height: 200px;
}
</style>


