<template>
    <div class="container-fluid">
        <b-img :src="teamImage"/>
        <div class="container">
          <h2 class="pt-3 pb-3">About Us </h2>
          <p>Established in 1952, Balubaid Group of Companies (BGC) today is a modern, diversified holding company whose operating activities span eight sectors in the Kingdom of Saudi Arabia. Starting from a humble spare parts trading operation over 60 years ago, Balubaid has evolved into a multi-business enterprise with interests in automotive retail, automotive aftermarket, industrial and service equipment, transportation, real estate, financial services, manufacturing, and hospitality. The Group also serves as agent, distributor or dealer / franchisee of over 35 international brands across a variety of sectors from automotive to industrial equipment and hospitality.</p>
          <p>Balubaid employs a diverse, multinational workforce of over 1000, and is committed to continued training, development, and the Saudization of its organization. The Group’s talented people hail from over 40 countries in the Middle East, Africa, South Asia, Southeast Asia, North America and of course, the Kingdom of Saudi Arabia.</p>
          <p>A privately held, family-owned enterprise, Balubaid has also been a pioneer in the Middle East in institutionalizing governance practices which separate the ownership and managerial control of the Group. Due to the foresight of the Group’s founder, the late Sheikh Omar A. Balubaid, in the early 2000s the Group introduced formal succession planning and pioneered a family charter which has served as a role model in a region dominated by family enterprises.

</p><p>Fueled by its own ambitions and the steady march of progress in its home market of Saudi Arabia, Balubaid continues to expand its activities and has established a corporate culture characterized by the desire to excel, a customer-centric mindset, and a commitment to continuous improvement. With strong leadership and passionate people, supported by world-class processes, systems and technology infrastructure, Balubaid continues its path of balanced growth and remains committed to the success of all its stakeholders and society at large.

</p>
          <div class="row pb-5 pt-5 bg-light">
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Vision</h3>
                <p class="text-center">To be a market leader in the region, with global interests. Renowned for its high quality in providing products and services, in a cost-effective and friendly manner that exceeds customer expectation, through the efforts of everyone.</p>
              </div>
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Mission</h3>
                <p class="text-center">We provide customers the best choice of products, services and solutions to satisfy their needs, We deliver prosperity to our people, shareholders and we positively contribute to the communities we serve.</p>
              </div>
              <div class="col-sm-12 pb-3 pt-3">
                <h3 class="text-center pb-3 pt-3">Our Values</h3>
                <p class="text-center">Balubaid continues to expand its activities and has established a corporate culture characterized by the desire to excel, a customer-centric mindset, and a commitment to continuous improvement.</p>
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


