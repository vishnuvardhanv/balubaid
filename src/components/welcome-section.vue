<template>
  <div class="container welcome-sectors">
    <h2>Welcome to Balubaid Group of Companies</h2>
    <p>Established in 1952, Balubaid Group of Companies (BGC) today is a modern, diversified holding company whose operating activities span eight sectors in the Kingdom of Saudi Arabia. Starting from a humble spare parts trading operation over 60 years ago, Balubaid has evolved into a multi-business enterprise with interests in automotive retail, automotive aftermarket, industrial and service equipment, transportation, real estate, financial services, manufacturing, and hospitality. The Group also serves as agent, distributor or dealer / franchisee of over 35 international brands across a variety of sectors from automotive to industrial equipment and hospitality.</p>
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

