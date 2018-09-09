<template>
  <v-container fluid>
    <v-layout row wrap align-center>
    <v-flex xs3 sm1 md1>
        <v-select
          :items="[1,2,3,4]"
          v-model="mobileCount"
          menu-props="auto"
          hide-details
          prepend-icon="stay_current_portrait"
          single-line
        ></v-select>
      </v-flex>
      <v-flex xs3 sm1 md1>
        <v-select
          :items="[1,2,3,4]"
          v-model="deskCount"
          menu-props="auto"
          hide-details
          prepend-icon="desktop_windows"
          single-line
        ></v-select>
      </v-flex>
  </v-layout>
  <br>
  <carousel 
  :perPage="mobileCount"
  :perPageCustom="[[1024, deskCount]]" 
  :minSwipeDistance=2 
  class="row"
  >
    <slide v-for="image in images" :key="image.id" >
     <a :href="image.href"><img :src="image.src" width="95%"></a> 
    </slide>
  </carousel>
  
  </v-container>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import storage from "../store/storage.json";

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      images: storage.images,
      deskCount: 3,
      mobileCount: 1
    };
  },

  methods: {}
};
</script>

<style>
.row img{
      display: block;
      margin: 0 auto; 
    }
</style>
