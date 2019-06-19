<template>
  <b-carousel >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          :src="slider1"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          :src="slider2"
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
      slider1: require('./../assets/images/PHOTO-2019-06-15-23-50-06.jpg'),
      slider2: require('./../assets/images/PHOTO-2019-06-15-23-50-08.jpg')
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


