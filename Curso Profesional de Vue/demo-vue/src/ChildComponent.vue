<template lang="pug">
    div
        h1 Este es un component Hijo
        local-component
</template>

<script>
import LocalComponent from './LocalComponent'
export default {
    components:{
        LocalComponent
    }
}

</script>