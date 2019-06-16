<template>
  <div class="business-sector">
    <h2>Business Sectors</h2>
    <b-card-group>
      <b-card v-for="(set, index) in dataSet" :key="index" :title="set.title" :img-src="set.image" :img-alt="set.image" img-top>
        <b-card-text>
          {{ set.title }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'businessSector',
  data: function() {
    return {
      dataSet: [{
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }, {
        image: require('./../assets/images/automotive-home-image.jpg'),
        title: 'Automotive'
      }]
    }
  }
}
</script>


