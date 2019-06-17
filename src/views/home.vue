<template>
  <div class="home">
    <Carousel />
    <WelcomeSection />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel.vue'
import WelcomeSection from '@/components/welcome-section.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    WelcomeSection
  }
}
</script>
