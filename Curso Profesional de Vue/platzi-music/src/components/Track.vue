<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name}}
      
      .content
        small {{ track.duration_ms}}
        nav.leave
          .level-left
            a.level-item
              span.icon.is-small(@click="selectTrack") ▶️

</template>

<script>
export default {
  props: {
    // tipo de dato que va a recibir y si es requerida
    // el objeto props se comporta como data.
    track: { type: Object, required: true }
  },

  methods: {
    // Este metodo es un metodo establecido que va a llamar al objeto padre
    selectTrack() {
      // $emit genera un evento en el componente padre
      this.$emit("select", this.track.id)

      this.$bus.$emit('set-track', this.track)
    }
  }
};
</script>


<style lang="css">
</style>