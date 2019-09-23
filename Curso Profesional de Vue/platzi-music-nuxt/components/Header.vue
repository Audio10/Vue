<template lang="pug">
  section.hero.is-success
    .hero-head
      header
        .container.navbar
          .navbar-brand
            .navbar-item
              strong Platzi Music
          .navbar-end
            router-link.navbar-item(to="search") Buscar 
            router-link.navbar-item(to="about") Nosotros
    
    .hero.body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vuenisimas!

</template>