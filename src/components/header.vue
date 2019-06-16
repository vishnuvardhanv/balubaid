<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <b-img :src="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home
                  <span class="sr-only">(current)</span>
                </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/business-sector">Business Sectors</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news-events">News & Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/careers">Careers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'appHeader',
  data: function() {
    return {
      logo: require('./../assets/images/balubaid-logo-web-2018-1.png')
    }
  }
}
</script>


