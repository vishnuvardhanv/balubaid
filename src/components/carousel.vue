<template>
  <b-carousel >
      <b-carousel-slide :img-src="slider1"> </b-carousel-slide>
      <b-carousel-slide :img-src="slider2"></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data: function() {
    return {
      slider1: require('./../assets/images/bgc-slider-home.jpg'),
      slider2: require('./../assets/images/hijaz-mall.jpg')
    }
  }
}
</script>


