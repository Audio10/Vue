<template lang="pug">

  .container
    p
      img(v-if="track && track.album", :src="track.album.images[0].url")
    p
      strong {{ track.name }}  
      small {{ track.duration_ms  | ms-to-mm}}
    p 
      audio(controls, :src="track.preview_url")

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Player",
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}

p{
  text-align: center;
}

</style>