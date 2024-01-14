<template lang="pug">
header.header 
    .header__container 
        router-link(
            v-if="this.$route.meta.prev",
            :to="{name:'lobby'}"
            )
            btnElement(
            :url="'prev.svg'",
                )
        .header__content 
            .header__content-element.first    
                .header__content-element-title 
                    p 
            .header__content-element.last    
                .header__content-element-title 
                    p {{GET_MONEY}}
                    .header__content-element-alert(v-if="GET_MONEY < GET_BID") недостаточно стредств
                    span(v-if="GET_MINUS") {{ -GET_BID }}
</template>

<script>
import { mapGetters } from 'vuex';
import btnElement from '../buttons/btnElement.vue';
export default {
    name:'header-main',
    components:{
        btnElement
    },
    computed:{
        ...mapGetters([
            "GET_MONEY",
            "GET_MINUS",
            "GET_BID"
        ])
    }
}
</script>

<style lang="scss">
.header{
    height: 80px;
    width: 100%;
    background: linear-gradient(to bottom,#8000FF, #9E00FF, #61009C);
    
    &__content{
        gap: 70px;
        
        display: flex;
            .first::after{
                content: "2";
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                
                color: #000;
                top:-5px;
                left: -4px;
                width: 49px;
                height: 49px;
                background: url("@/assets/img/Star.svg");
                background-repeat: no-repeat; 
                background-size: contain;         
                 
            }
            .last::after{
                @include elementAfter("@/assets/img/money.svg");
                top:8px;
                left:10px

                 
            }
            .last{
                background: #370063;
                padding: 10px 5px;
                .header__content-element-title {
                    p{
                        background: linear-gradient(to bottom,#EBFF00,  #FFA800);
                        -webkit-text-fill-color: transparent;
                        -webkit-background-clip: text; 
                    }
                }
                
            }
        &-element{
            @include element;
          
            
           
            &-alert{
                color: rgba(255, 0, 0, 0.589);
                // width: px;
                height: 30px;
                font-size: 10px;
                margin-top: 10px;
                text-align: center;
            }
            &-title{
                p{
                    background: linear-gradient(to bottom, #0066FF,#BD00FF);
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text; 
                    font-size: 20px;
                    text-align: center;
                    position: relative;
                    filter:drop-shadow(0px 5px 2px #000);
                  
                    
                }
                span{
                    position: absolute;
                    top: -10px;
                    background: linear-gradient(to bottom, #e63636,#BD00FF);
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text; 
                    left: 50%;
                    font-size: 18px;
                }

              
            }
        }
      
            // &::after{
            //     content: url("@/assets/img/money.svg");
            // }
        }
    
    &__container {
        display: flex;justify-content: center;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        margin-left: 34px;
        gap: 50px;
    }

}

</style>