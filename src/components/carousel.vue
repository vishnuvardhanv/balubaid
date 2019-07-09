<template>
  <b-carousel >
      <b-carousel-slide v-for="(slider, index) of this.sliderSet" :key="index">
        <img
          slot="img"
          class="d-block img-fluid w-100"
          :src="slider.image"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data: function() {
    return {
      sliderSet: [{
        image: require('./../assets/images/PHOTO-2019-06-28-13-27-10.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-28-46.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-28-56.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-29-20.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-30-06.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-30-51.jpg')
      }, {
        image: require('./../assets/images/PHOTO-2019-06-28-13-31-07.jpg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 600px;
  .img-fluid {
    height: 100%;
    width: 100%;
  }
}
</style>


