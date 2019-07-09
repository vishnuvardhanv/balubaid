<template>
  <div class="business-sector">
    <BusinessSector />
  </div>
</template>

<script>
import BusinessSector from '@/components/business-sector.vue';

export default {
  components: {
    BusinessSector
  }
}
</script>

<style lang="scss">
.business-sector {
  width: 80%;
  margin: 0 auto;
}
</style>


