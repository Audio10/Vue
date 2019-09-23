# VUE

## VUE CLI

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## Crear un proyecto

```
vue create my-project
# OR
vue ui
```

## Limpieza de proyecto.

En el archivo **router.js** se eliminan las rutas y solo debe conservar en **routes**: como un arreglo vacío.

```
routes: []
```

El archivo App.vue solo tendra el **router-view** que se encarga de gestionar las vistas. Como una sola pagina. Y los estilos se eliminan de momento.

```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```

Dentro de components se eliminan los componentes preestablecidos. 

Dentro de vistas de igual forma se eliminan todas.

## Instant Prototyping.

```
npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```

### Montar proyecto.

Se monta y compila el proyecto y se coloca en **localhost**:8080

```
vue serve App.vue
```

## Creación de un componente con createElement

Crear un componente con extencion **.vue** escribir su script y exportarlo.

```javascript
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
```

Instanciar el elemento.

```javascript
<template>
  <div id="app">

    <button @click.prevent="toggleHandler">Toggle Modal</button>

    <modal-create-element :show="show" message="Hello World"></modal-create-element>
  </div>

</template>

<script>
import ModalCreateElement from './ModalCreateElement'

export default {
  name: "App",
  data() {
    return {
      show: false,
    }
  },
  components: { ModalCreateElement },
  methods: {
    toggleHandler (){
      this.show = !this.show
    }
  }
}

</script>

<style>
body {
  background: #cecece;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 250px;
  background: #fff;
  padding: 15px;
}
.modal > .message {
  margin: 0;
  margin-bottom: 10px;
}
</style>

```

## JSX

La variación es que permite escribir de manera mas sencilla un componente.

Para llamar un evento este se llama con **onClick={this.method}** 

```
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
```

