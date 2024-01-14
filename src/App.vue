<template>
<main>
    <header-Vue></header-Vue>
    <router-view/>
    <footer-vue></footer-vue>
</main>
</template>
<script>
import footerVue from './components/layuot/footer.vue'
import headerVue from './components/layuot/header.vue'


export default {
  components:{
    headerVue,
    footerVue
  }
}


</script>
<style lang="scss">
main{
  display: flex;
 
  flex-direction: column;
  justify-content: space-between;
}
</style>
