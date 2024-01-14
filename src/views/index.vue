<template lang="pug">
section.royal 

    .royal__container
        Transition(name="ani",mode="in")
            .royal__first.royal__line
                template(
                        name="line"
                        v-for="(item,index) in GET_LINE1"
                        :key="index"
                    
                )   
                    .royal__item(
                        :data-id="item.id"
                        :data-line="item.line")
                        img(:src="require(`@/assets/img/gameRoyal/${item.img}`)", alt="alt")

        .royal__middle.royal__line 
            template(
                        v-for="(item,index) in GET_LINE2"
                        :key="index"
                )   
                    .royal__item(
                        :data-id="item.id"
                        :data-line="item.line")
               
                        img(:src="require(`@/assets/img/gameRoyal/${item.img}`)", alt="alt")

        .royal__last.royal__line
            template(
                       
                        v-for="(item,index) in GET_LINE3"
                        :key="index"
                )   
                    .royal__item(
                        :data-id="item.id"
                        :data-line="item.line"
                    ) 
                        img(:src="require(`@/assets/img/gameRoyal/${item.img}`)", alt="alt")
    

</template>

<script>
import { mapGetters } from 'vuex';



export default {
data(){
    return{
        stop:false
    }
},


computed:{
   ...mapGetters([
    "GET_LINE1",
    "GET_LINE2",
    "GET_LINE3"
   ])
}
}
</script>

<style lang="scss">
.royal{ 
    background: radial-gradient(circle at center, #200027,#000, );
   padding: 50px 0 ;
    width: 100%;
    &__container{
        height: 300px;
        margin: 0 auto;
        display: flex;
        width: 500px;
        gap: 20px;
        justify-content: center;
        border-radius: 20px;
        padding: 15px 22px;
        background: #34113B;
        border: 1px solid #FFE600;
        // overflow-y: scroll;
        overflow: hidden;
        &::-webkit-scrollbar {
         width: 0;
        }
    }
    &__btn{
        color: #000;
        background: #030;
    }
    &__line{
        display: flex;
        flex-direction: column;
        gap: 18px;
        height: 800px;
        overflow: hidden;
    }
    &__item{
      
        img{
            object-fit: contain;
            width: 100%;
        }
        max-width: 149px;
        min-width: 100px;
        padding: 10px;
        height: 65px;
        &-active{
            // background: #841;
        }
        &[data-id].active{
            img{
                animation: slotActive 1s 3 ease-in-out;
        
            }
        }
        &[data-id="1"].active{
            background: #e718d6;
            border: 3px solid #200027c0;
            
        }
        &[data-id="2"].active{
            background: #dfc326b2;
            border: 3px solid #dfc326ea;
        }
        &[data-id="3"].active{
            background: #68d63cc2;
            border: 3px solid #318510;
        }
        &[data-id="4"].active{
            background: #ad1409;
            border: 3px solid #680c06;
        }
        &[data-id="5"].active{
            background: #f5d106b4;
            border: 3px solid #aa9414;
        }
        &[data-id="6"].active{
            background: #5409df;
            border: 3px solid #3e06a5;
        }

        &[data-id="7"].active{
            background: #bdc006be;
            border: 3px solid #797a0d;
        }
        &[data-id="8"].active{
            background: #d310d3;
            border: 3px solid #800880;
        }
        &[data-id="9"].active{
            background: #ec610459;
            border: 3px solid #79380c;
        }
        
        &.active{
           
        }
    }
    }
.line{
    &-enter-active{
        opacity: 1;
        transition: all 3s ease-in;
    }
    &-leave-active{
        opacity: 1;
        transition: all 3s ease-in;
    }
    &-enter-from,&-leave-to{
        opacity: 0;
    }

}
@keyframes slotActive {
    0%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
    
}


.an-enter-active {
  transition: all .3s ease;
}
.an-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.an-enter, .an-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>