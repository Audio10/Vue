<template lang=pug>
  #app
    pm-header

    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

    pm-loader( v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.navbar
        .container
          input.input.is-large(
            type="text", 
            placeholder="Buscar canciones", 
            v-model="searchQuery")

          a.button.is-info.is-large(@click="search") Busca!
          a.button.is-danger.is-large &times;
      
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pm-track(
              :class="{ 'is-active' : t.id === selectedTrack }",
              :track='t', 
              @select="setSelectedTrack")
            

    pm-footer
</template>

<script>
import trackService from "@/services/track";

import PmFooter from "@/components/layout/Footer";
import PmHeader from "@/components/layout/Header";

import PmTrack from "@/components/Track";

import PmLoader from "@/components/shared/Loader";
import PmNotification from "@/components/shared/Notification";

export default {
  name: "app",

  components: {
    PmFooter,
    PmHeader,
    PmTrack, //componente Hijo de App.vue
    PmLoader,
    PmNotification
  },

  data() {
    return {
      searchQuery: "",
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ""
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },

  watch: {
    showNotification() {
      if (this.showNotification)
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
    }
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }

      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        console.log(res);
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },
    // ESTE METODO RECIBE EL id PORQUE ESTE MISMO ES ENVIADO DESDE TRACK
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #23d160;
}
</style>
