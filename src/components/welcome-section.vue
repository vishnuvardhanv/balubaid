<template>
  <div class="container welcome-sectors">
    <h2 class="text-center pt-5 pb-5">Welcome to ARAN STEEL COUPLING FACTORY</h2>
    <p>Established in 1990 by <strong>Abdullah Al Shriyan</strong> in the name of <strong>“ARAN FOUNDRY & METAL COATING FACTORY”.</strong>  Later, in 1995 developed a machine shop in the name of <strong>“ARAN STEEL COUPLING FACTORY”.</strong></p>
    <BusinessSector />
  </div>
</template>
<script>
import BusinessSector from '@/components/business-sector.vue';
export default {
  name: 'welcomeSection',
  components: {
    BusinessSector
  }
}
</script>

