const trackMixin = {
  methods: {
    // Este metodo es un metodo establecido que va a llamar al objeto padre
    selectTrack() {
      // Si no hay preview retorna nada!
      if (!this.track.preview_url) { return }
      // $emit genera un evento en el componente padre
      this.$emit("select", this.track.id)

      this.$bus.$emit('set-track', this.track)
    }
  },
}

export default trackMixin