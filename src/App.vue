<template>
  <div>
    <AppHeader />
    <div class="parent-section">
      <router-view/>
    </div>
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

<style lang="scss">
  .parent-section {
    padding-top: 100px;
  }
</style>



