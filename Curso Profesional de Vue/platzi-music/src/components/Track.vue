<template lang="pug">
  .card(v-if = "track && track.album")
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
        small {{ track.duration_ms | ms-to-mm}}
        nav.leave
          .level-left
            button.level-item.button.is-primary
              span.icon.is-small(@click="selectTrack") ▶️
            button.level-item.button.is-warning
              span.icon.is-small(@click="goToTrack(track.id)") 🗺

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
      // Si no hay preview retorna nada!
      if (!this.track.preview_url) { return }
      // $emit genera un evento en el componente padre
      this.$emit("select", this.track.id)

      this.$bus.$emit('set-track', this.track)
    },

    goToTrack (id) {
      // Si no hay preview retorna nada!
      if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id } })
    }
  }
};
</script>


<style lang="css">
</style>