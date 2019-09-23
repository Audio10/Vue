const trackMixin = {
  methods: {
    selectTrack () {
      // Si no hay preview retorna nada!
      if (!this.track.preview_url) { return }
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
