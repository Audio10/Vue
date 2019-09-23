<template lang="pug">
  section.hero.is-success
    .hero-head
      header
        .container.navbar
          .navbar-brand
            .navbar-item
              strong Platzi Music
          .navbar-end
            a.navbar-item(@click="selectLang('en')") Ⓜ
            a.navbar-item(@click="selectLang('es')") ⌚
            router-link.navbar-item(to="/") {{ $t('search')}} 
            router-link.navbar-item(to="about") {{ $t('about')}}
    
    .hero.body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vuenisimas!
      pm-player
</template>

<script>
  import PmPlayer from '@/components/Player'

export default {
  name: "Header",
  components: {
    PmPlayer
  },

  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  },
}
</script>
