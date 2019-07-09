<template>
    <div class="container-fluid">
        <b-img :src="teamImage"/>
        <div class="container">
          <h2 class="pt-3 pb-3">About Us </h2>
          <p>ARAN was established in 1990 constituting of two factories ARAN Steel Coupling Factory and ARAN Foundry & Metal Coating. Later the company entered into different segments including engineering, contracting, real estate, travel & tourism, and retail. The company is consolidating the companies under ARAN GROUP.</p>
          <p>ARAN Steel coupling which is equipped with latest and mos advanced machineries with capabilities to produce most precision parts from all type of materials. The factory is capable of production of small batches as well as mass production. It also has the capabilities to take on full projects starting from the design, prototype, machining & Fabrication based on customer requirements. ARAN Steel is equipped with latest laboratory equipment's to ensure quality is up to customer satisfaction.</p>
          <p>ARAN Foundary is mainly casting for nonferrous metals with coating & plating services. Foundary is equipped with brass extrusion press which produce all type of brass materials such as round, flat, square bars. It also extrude customized brass bars based bars based on customers's requirements.</p>
          <p>Aram has evolved into a multi business enterprise with interest in Real estate, Travels & Tourism, Trading, Retail Business & Investments.</p>
          <p>Fueled by ambitions and steady march of process in its home market of Saudi Arabia.  Aran continues to expand its activities & has established a Corporate culture characterized by desire to excel, a customer-centric mindset and a commitment to continuous improvement with strong leadership and passionate people supported by world class processes, systems and technology infrastructure, Aran continues its path of balanced growth and remains committed to success of all its endeavor society at large.</p>
          <div class="row pb-5 pt-5 bg-light">
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Vision</h3>
                <p class="text-center">To be a market leader in the region, with global interests. Renowned for its high quality in providing products services in a cost effective and friendly manner that exceeds customer expectation, through the efforts of everyone.</p>
              </div>
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Mission</h3>
                <p class="text-center">We provide customers best choice of products, service and solutions to satisfy their needs.  We deliver Prosperity to our people and we positively contribute to the communities we serve.</p>
              </div>
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Values</h3>
                <p class="text-center">Aran continues to expand its activities and has established great culture characterized by the desire to excel, a customer centric mindset and a commitment Continuous improvement.</p>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data: function() {
    return {
      teamImage: require('./../assets/images/bgc-team.jpg')
    }
  }
}
</script>

<style lang="scss">
img {
   width: 100%;
}
</style>


