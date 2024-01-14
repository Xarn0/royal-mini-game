<template lang="pug">
.itemGame
        
        .itemGame__container(v-if="bool")
            img(:src="require(`@/assets/img/${url}`)", :class="{block:bool}")
        router-link(:to="{name:nameUrl}")
            template(v-if="!bool")
                img(src="@/assets/img/gameItem.jpg", :class="{block:bool}")
    
</template>

<script>
export default {
props:["bool","url","nameUrl"]
}
</script>

<style lang="scss">
.itemGame{
    border-radius: 20px;
    min-width: 182px; 
    height: 182px; 

    &__container{
        user-select: none;
 
        position: relative;
        &::after{
            content: url("@/assets/img/block.svg");
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: absolute;
            height: 100%;
            top:0;
            background: #171442c0;
            border-radius: 20px;
        }
        // position: absolute;
    }
    .block{
        //   filter: sepia(1);
    }
    // background: linear-gradient(to bottom, #FFB800,#FFA800);
    background: #cccccc52;
    img{
        object-fit: contain;
        border-radius: 20px;
        z-index: 0;
        
        position: relative;
        width: 100%;
       
      
    }
   
}
</style>