<script>
export default {
  name: 'ModalCreateElement',

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

  render (createElement) {
    return (this.show) ? createElement('div', {
      class: 'modal',

    },[
      createElement('p', {
        class: 'message'
      }, this.message),

      createElement('button',{
        class: 'btn',
        on: {
          click: this.clickCancelHandler
        }
      },'Cancel'),

      createElement('button', {
        class: 'btn',
        on: {
          click: this.clickOkHandler
        }
      },'OK')
      
    ]) : null
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