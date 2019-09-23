<template lang="pug">
  div
    pm-header
    nuxt
    pm-footer
</template>

<script>
import PmHeader from '../components/Header'
import PmFooter from '../components/Footer'


export default {
  components: { PmHeader, PmFooter }
}
</script>
