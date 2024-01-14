<template lang="pug">
footer.footer 
   
    .footer__container
        .sh {{ slotIF() }}
        
        .footer__count 
    
            btnElement(
                @click="decrimentBID()"
                :url="'min.svg'"
            )
           
            .footer__count-p
                p {{ GET_BID }}
                
            btnElement(
                @click="incrimentBID()"
                :url="'max.svg'"
            )
            
        .footer__win 
            .footer__win-title Win 
            .footer__win-count {{ GET_WIN }}
        .footer__btns 
        
            .footer__btns-auto 
                button(
                    @click="clearSlot( )"
                    ) auto
            .footer__btns-spin
                button(@click="startRoyal") spin
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import btnElement from '../buttons/btnElement.vue';
export default {
name:"footer-main",
components:{
    btnElement
},
props:["spin"],
data(){
    return{
        stop:false,
       all:[],
        collet:[],
        line:[],
        line3:[]
    }
},
methods:{
    ...mapActions([
        "SET_LINE_ROYAL",
        "SET_WIN_ACTION",
        "SET_RANDOM_ACTIVE",
        "SET_RANDOM_ACTIVE2",
        "SET_RANDOM_ACTIVE3",
    
    ]),
    ...mapMutations([
        "SET_LINE_ROYAL_MUTATIONS",
        "SET_ROYAL_MINUS",
        "SET_ADD_BID",
        "SET_REMOVE_BID",
        "SET_STOP",
        "SET_SLOT",
        "CLEAR_SLOT",
        "SET_WIN",
        "SET_RANDOM_LINE"
    
    ]),
    // startRandom(){
    //   console.log(this.SET_RANDOM_LINE(this.MyRandom().line1))
        
    // },
    MyRandom(){
        return this.GET_LINE1.sort(()=>Math.random() -0.5)
        
    },
    MyRandom2(){
        return this.GET_LINE2.sort(()=>Math.random() -0.5)
        
    },
    MyRandom3(){
        return this.GET_LINE3.sort(()=>Math.random() -0.5)
        
    },
    decrimentBID(){
        return this.SET_REMOVE_BID()
    },
    incrimentBID(){
        return this.SET_ADD_BID()
    },
    royalRun(array,time){
          
        if(this.GET_SLOT.length == 3 ){this.CLEAR_SLOT()}
        var refreshIntervalId = setInterval(()=> this.SET_LINE_ROYAL_MUTATIONS(array),time) // !мутацию сюда
        setTimeout(()=>{
            clearInterval(refreshIntervalId)
            this.SET_SLOT(array)
            
            
    },Math.random()*10000) 
                  
            
    },
    // Пробег по каждому массиву перетусовка элементов
    run(array){
            for(let i = 0 ; i < array.length;i++){
                let fist =  array.shift(array[0])
                return array.push(fist) 
            }
    },
    //  запуск всех сразу
    startRoyal(){
       
            
           if(this.GET_BID <= this.GET_MONEY){
                this.deleteActive()
                this.royalRun("line1",320),
                this.royalRun("line2",340),
                this.royalRun("line3",310),
                this.SET_ROYAL_MINUS()
           }
            
            
            
        },
 
    autoRoyal(){
        this.royalRun("line1",125)
        this.royalRun("line2",150)
        this.royalRun("line3",100)
        this.SET_ROYAL_MINUS()
    }, 
    deleteActive(){
        document.querySelectorAll(".royal__item").forEach(item=>{
            item.classList.remove("active")
        })
    },
     
       
       
   
    clearSlot(){
        return new Promise((resolve,reject)=>{
       
        
       
   
        })
        .then((res)=>{
            this.autoRoyal()
        })
        .then(()=>{
            this.slotIF()
        })
       
                       
    },
    apppers(id,line){
        return document.querySelector(`[data-id='${id}'][data-line='${line}']`).classList.add("active")
    },
   
    slotIF(){

        if(this.GET_SLOT.length){
            
            if(!(this.GET_SLOT.length % 3)){ 
            let assArr = new Map();
            let ob = JSON.parse(JSON.stringify(this.GET_SLOT))
          
            ob.map(element => {
               
                    if(element[0].line == 1){
                        return assArr.set('line1',element)
                    }
                    if(element[0].line == 2){
                        return assArr.set('line2',element)
                    }
                    if(element[0].line == 3){
                        return assArr.set('line3',element)
                    }
                    
                
            });
            
         


            var arrAll =  JSON.parse(JSON.stringify(this.GET_SLOT))
               let line1 = assArr.get("line1")
            let line2 = assArr.get("line2")
            let line3 = assArr.get("line3")   
                    if((line1[0].id === line2[1].id) && (line2[1].id=== line3[2].id)){
                            this.SET_WIN_ACTION(1.5)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("диагонал ")
                    }
                    if((line1[2].id === line2[1].id) && (line2[1].id=== line3[0].id)){
                            this.SET_WIN_ACTION(1.5)
                            console.log("диагонал ")
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[0].id,line3[0].line)
                    }
                    
          
                        if((line1[1].id === line2[1].id) && (line1[1].id === line3[1].id )  ){
                            this.SET_WIN_ACTION(4)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("джек")
                        }
                        else if((line1[1].id === line2[1].id) && (line2[1].id === line3[2].id)){
                            this.SET_WIN_ACTION(0.75)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("Левый сет с хвостом")
                        }
                        else if(line1[1].id === line2[1].id){
                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[1].id,line2[1].line)
                           
                            console.log("Левый сет")

                        }
                        else if((line2[1].id === line3[1].id) && line2[1].id == line1[2].id){
                            this.SET_WIN_ACTION(0.75)
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("правый сет c хвостом")
                        }
                        else if(line2[1].id === line3[1].id){
                            this.SET_WIN_ACTION(0.5)
                            console.log("правый сет")
                          
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[1].id,line3[1].line)
                        }

                        if((line2[0].id === line1[0].id) && (line2[0].id === line3[0].id)){
                            this.SET_WIN_ACTION(2)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[0].id,line3[0].line)
                            console.log("верхний джекпот")
                        }
                        else  if((line2[0].id === line1[0].id) && (line2[0].id === line3[1].id)){
                            this.SET_WIN_ACTION(0.75)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("левый  верхний сет  с хвостом")
                        }
                        else if(line2[0].id === line1[0].id){
                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[0].id,line2[0].line)
                          
                            console.log("левый  верхний сет")
                        }

                        else if((line2[0].id === line3[0].id) && (line2[0].id === line1[1].id)){
                            this.SET_WIN_ACTION(0.75)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[0].id,line3[0].line)
                            console.log("правый  верхний сет  с хвостом")
                        }
                        else if(line2[0].id === line3[0].id){
                            this.SET_WIN_ACTION(0.5)
                        
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[0].id,line3[0].line)
                              console.log("правый  верхний сет")
                        }

                        if((line1[2].id === line2[2].id) && (line1[2].id === line3[2].id)){
                            this.SET_WIN_ACTION(2)
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("нижний джекпот")
                        }
                        else if((line2[2].id === line3[2].id) && (line2[2].id === line1[1].id)){

                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("правый  нижний сет с хвостом")
                        }
                        else if(line2[2].id === line3[2].id){
                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("правый  нижний сет")
                        }
                        else if((line1[2].id === line2[2].id) && (line1[2].id === line3[1].id)){
                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("левый  нижний сет с хвостом")
                        }
                        else if(line1[2].id === line2[2].id){
                            this.SET_WIN_ACTION(0.5)
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[2].id,line2[2].line)
                            console.log("левый  нижний сет")
                        }




                        if((line2[0].id === line3[1].id) && (line2[1].id === line3[2].id)){
                            this.SET_WIN_ACTION(1.25)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[1].id,line3[1].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("дубль")
                        }
                        if((line1[0].id === line2[1].id) && (line1[1].id === line2[2].id) && (line2[0].id === line3[1].id) ){
                            this.SET_WIN_ACTION(1.25)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[1].id,line3[1].line)
                            this.apppers(line2[0].id,line2[0].line)
                            console.log("супер дубль")
                        }
                        if((line2[1].id === line3[2].id) && (line2[2].id === line3[1].id)){
                            this.SET_WIN_ACTION(1.25)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[2].id,line3[2].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("Закрутило")
                        }
                        if((line1[1].id === line2[0].id) && (line2[0].id === line3[1].id)){
                            this.SET_WIN_ACTION(1.25)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("черепаха")
                        }
                       
                        if((line1[0].id === line2[1].id) && (line2[1].id === line3[0].id)){
                            this.SET_WIN_ACTION(1.25)
                            this.apppers(line1[0].id,line1[0].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[0].id,line3[0].line)
                            console.log("верхне нижняя черепаха")
                        }
                        if((line1[1].id === line2[2].id) && (line2[2].id === line3[1].id)){
                            this.SET_WIN_ACTION(0.25)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[2].id,line2[2].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("нижняя центральная черепаха")
                        }
                        if((line1[2].id === line2[1].id) && (line2[1].id === line3[2].id)){
                            this.SET_WIN_ACTION(0.25)
                            this.apppers(line1[2].id,line1[2].line)
                            this.apppers(line2[1].id,line2[1].line)
                            this.apppers(line3[2].id,line3[2].line)
                            console.log("нижняя верхняя черепаха")
                        }
                        if((line1[1].id === line2[0].id) && (line2[2].id === line3[1].id)){
                            this.SET_WIN_ACTION(0.25)
                            this.apppers(line1[1].id,line1[1].line)
                            this.apppers(line2[0].id,line2[0].line)
                            this.apppers(line3[1].id,line3[1].line)
                            console.log("Две пары")
                        }
                       
                   
                
                }
         }
        }
},
computed:{
  
    line1FROM(){},
    line1FROM(){},
    ...mapGetters([
    "GET_LINE1",
    "GET_LINE2",
    "GET_LINE3",
    "GET_MONEY",
    "GET_BID",
    "GET_SLOT",
    "GET_WIN"
   ])
  
  
},

mounted(){
    // this.SET_LINE_ROYAL()
    this.SET_WIN_ACTION(),
    this.SET_RANDOM_ACTIVE(this.MyRandom())
    this.SET_RANDOM_ACTIVE2(this.MyRandom2())
    this.SET_RANDOM_ACTIVE3(this.MyRandom3())
}
}
</script>

<style lang="scss">





.footer{
    background: linear-gradient(to bottom, #8000FF,#9E00FF,#61009C);
    border-bottom: 1px solid #913BFF;
    height: 56px;
    .sh{
        font-size: 0;
        width: 0;
        display: inline;
        position: absolute;
    }
    &__container{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    &__win{
        display: flex;
        gap: 40px;
        padding: 11px 15px;
        background: #320950;
        border-radius: 10px;
        align-items: center;
        text-transform: uppercase;
        &-title{
            background: linear-gradient(to bottom, #fff,#1DC9FF);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text; 
            -webkit-text-stroke: 0.5px #244581;
            font-size: 20px;
        }
        &-count{
            @include colorGold;
        }
    }
    .btnMain img{
        margin-right: 0;
        margin-top: 2px;
       
    }
    &__count{
       
       &-p{
        background: #320950;
            padding: 7px 15px;
            border-radius: 10px;
       }
        display: flex;
        gap: 10px;
        align-items: center;
        
        p{
            
          @include colorGold;
        }
    }
    &__btns { 
        display: flex; 
        gap :10px;
       
        &-auto{
            border-radius: 11px;
            background: linear-gradient(to bottom,#BD00FF,#6F23CC,#005484);
            border: 1.5px solid #00A3FF;
                button{
                    background: linear-gradient(to bottom, #fff,#1DC9FF);
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text; 
                    -webkit-text-stroke: 0.5px #244581;
                }
            }
        &-spin{
            border-radius: 11px;
            background: linear-gradient(to bottom,#70FF00,#008405);
            border: 1px solid #FFB800;
            button{
                background: linear-gradient(to bottom, #fff,#73FF1D);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text; 
            }
        }
        button{
            border-radius: 11px;
            padding: 11px 27px;
            outline: none;
            border: none;
            text-transform: uppercase;
            font-size: 20px;
          
    
        }
    }
}

</style>