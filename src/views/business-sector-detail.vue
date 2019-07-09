<template>
  <div class="business-sector-detail container-fluid">
    <b-img :src="pageSet.image"/>
    <div class="container">
      <h2 class="pt-3 pb-3">{{ pageSet.title }}</h2>
      <div v-html="pageSet.description"></div>   
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      dataSet: {
        foundary: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-27-10.jpg'),
          title: 'Foundry',
          description: '<p>Aran Foundry & Metal Coating Factory, our state-of-the-art Foundry started production in 1990 to meet the growing requirement of our global customers for high integrity steel, stainless steel and non-ferrous metals.</p><p>The Foundry located in Riyadh, Saudi Arabia with limited setup and also having steel extrusion machine for supporting the esteemed Customers, as per their requirements.</p><p>The plant is equipped with 500 kg capacity Furnace.</p>'
        },
        machineShop: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-28-46.jpg'),
          title: 'Machine Shop',
          description: '<p>Aran Steel Coupling Factory is a pioneer in the manufacture of precision machine parts and complex fabrications, dedicated to Customer satisfaction.</p><p>Plants are well equipped with CNC Machines, Turning machine, Milling machine, Three axes Machine and Conventional Machines.</p>'
        }, 
        realEstate: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-28-56.jpg'),
          title: 'Real Estate',
          description: '<p>Aran has grown into a reliable brand for Real estate Consulting & solution across all verticals, servicing various segments of clients.  With its Vision & Mission the yeti the organization is known for its reliability, integrity and the quality of service.</p><p>We at Aran believe in the power of understanding</p><ul><li>We believe in understanding our clients & their needs</li><li>We believe in understanding the Market & Future Prospects before providing any solutions.</li><li>We believe in enabling transactions which bring value to our clients</li></ul>'
        },
        travelAndTourism: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-29-20.jpg'),
          title: 'Travel and Tourism',
          description: '<p>In Aran Travels, we provide quality, cost effective business and leisure travel solution anytime, anywhere with a stellar reputation of __ years built on market knowledge, expertise and technology we specialize in travel service for individual travelers, local & MNC’s as well as government institutions.</p><p>Aran Travels believes in providing nothing but the best to our clients.  We acknowledge that no two travelers are the same and design perfect travel experiences according to your budgets and timelines</p>'
        }, 
        realBusiness: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-30-06.jpg'),
          title: 'Retail Business',
          description: '<p>The company represents several international brands in wide varieties of products ranging from organic food items to coffee shops. The company is adding new products constantly and aim to grow n the food market with ambitious plans.</p>'
        }, 
        tradingBusiness: {
          image: require('./../assets/images/PHOTO-2019-06-28-13-30-51.jpg'),
          title: 'Trading Business',
          description: '<p>The company represents several international brands in wide varieties of products ranging from organic food items to coffee shops. The company is adding new products constantly and aim to grow n the food market with ambitious plans.</p>'
        }
      },
      page: '',
      pageSet: {}
    }
  },
  mounted: function() {
    this.page = this.$route.params.page
    this.pageSet = this.dataSet[this.page];
  }
}
</script>

<style lang="scss" scoped>
  img {
    height: 500px;
  }
</style>


