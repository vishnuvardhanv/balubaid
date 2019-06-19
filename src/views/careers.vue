<template>
    <div class="container-fluid">
        <b-img :src="teamImage"/>
        <div class="container">
          <h2 class="pt-3 pb-3">Careers</h2>
          <p>We offers a wide variety of career opportunities across a spectrum of exciting businesses ranging from automotive and real estate to manufacturing and services. We welcome talented individuals to join our team, and we provide a warm, family oriented culture where collegiality, achievement, and continuous development are highly valued. 

</p>
          <div class="row pb-5 pt-5 mb-5 bg-light">
              <div class="col-sm-12 pb-3 pt-3">
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <h3>Apply Now</h3>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Name">
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Contact Number</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Contact Number">
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Upload Resume</label>
                    <input type="file" class="form-control-file" id="inputEmail4">
                  </div>
                  <div class="form-group col-md-12">
                    <button type="button" class="btn btn-primary">Apply Now</button>
                  </div>
                  <div class="form-group col-md-12">
                    <span>For more details, please mail us at <strong>hr@aranholding.net</strong></span>
                  </div>
                </div>
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


