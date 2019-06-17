<template>
    <div class="container-fluid">
        <b-img :src="teamImage"/>
        <div class="container">
          <h2 class="pt-3 pb-3">Careers</h2>
          <p>Balubaid offers a wide variety of career opportunities across a spectrum of exciting businesses ranging from automotive and real estate to manufacturing and services. We welcome talented individuals to join our team, and we provide a warm, family oriented culture where collegiality, achievement, and continuous development are highly valued. As a pillar of the Saudi business community, Balubaid is committed to offering a range of rewarding career opportunities for qualified Saudi candidates and contributing to the human capital development of the Kingdom.

</p>
          <div class="row pb-5 pt-5 mb-5 bg-light">
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Discover and apply for open positions at Balubaid Group!</h3>
                <b-button class="d-flex justify-content-center marign-center" variant="outline-secondary">APPLY NOW</b-button>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data: function() {
    return {
      teamImage: require('./../assets/images/careers-header.jpg')
    }
  }
}
</script>

<style lang="scss">
img {
   width: 100%;
}
.marign-center {
  margin: 0 auto;
}
</style>


