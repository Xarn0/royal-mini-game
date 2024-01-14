<template lang="pug">
section.lobby 
        .lobby__games 
            itemGame(
                :bool='false', 
                :url="'gameItem.jpg'",
                :nameUrl="'policy'")
            itemGame(
                :bool='true', 
                :url="'gameItem.jpg'",
                :nameUrl="'policy'")
</template>
<script>
import itemGame from "@/components/games/gameItem.vue";

export default {
    name:"lobby-main",
    components:{
        itemGame
    }
}
</script>

<style lang="scss">
.lobby{
    background: url("@/assets/img/lobbyFon.jpg") #350367a8;
    background-size: 100%;
    position: relative;
    width:800px;
   
    height: 500px;
    &__games{
        height: 400px;
        // width: 500px;
        margin: 0 auto;
        padding-left: 50px;
        padding-right: 50px;
        position: relative;
        flex-wrap: nowrap;
       
        overflow-x: scroll;
        display: flex;
        gap:20px;
        align-items: center;
        justify-content: center;
    }
    &__item{
        border: 1px solid #993;
        width: 150px;
        height: 150px;
    }
}
</style>