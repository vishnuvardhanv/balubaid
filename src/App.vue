<template>
  <div class="container-fluid">
    <AppHeader />
      <router-view/>
    <AppFooter />
  </div> 
</template>

<script>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>


