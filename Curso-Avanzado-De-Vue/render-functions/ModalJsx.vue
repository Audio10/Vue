<script>
export default {
  name: 'ModalJsx',
  props: {

    show: {
      type: Boolean,
      default: false,
    },

    message: {
      type: String,
      required: true,
    }

  },

  render() {
    return this.show && 
    <div class="modal">
      <p>{this.message}</p>
      <button onClick={this.clickCancelHandler}>Cancelar</button>
      <button onClick={this.clickOkHandler}>Ok</button>
    </div>
  },

  methods: {
    clickCancelHandler () {
      console.log('Click Cancelar')
    },

    clickOkHandler () {
      console.log('Click Ok')
    }

  },

}
</script>