<template>
  <b-carousel >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          :src="slider1"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
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
      slider1: require('./../assets/images/bgc-slider-home.jpg'),
      slider2: require('./../assets/images/hijaz-mall.jpg')
    }
  }
}
</script>


