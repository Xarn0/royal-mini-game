import { createStore } from 'vuex'

export default createStore({
  state: {
    money:1000000,
    bid:4000,
    slot:[],
    balans:true,
    minus:false,
    stop:false,
    win:0,
    line1:[
        {
            name:"shir",
            id:1,
            img:"royal11.svg",
            line:1
        },
        {
            name:"shir1",
            id:2,
            img:"royal2.svg",
            line:1
        },
        {
            name:"shir2",
            id:3,
            img:"royal3.svg",
            line:1
        },
        {
            name:"shir3",
            id:4,
            img:"royal4.svg",
            line:1
        },
        {
            name:"shir3",
            id:5,
            img:"royal5.png",
            line:1
        },
        {
            name:"shir3",
            id:6,
            img:"royal6.svg",
            line:1
        },
        {
            name:"shir7",
            id:7,
            img:"royal7.svg",
            line:1
        },
        {
            name:"shir3",
            id:8,
            img:"royal8.svg",
            line:1
        },
        {
            name:"shir3",
            id:9,
            img:"royal9.svg",
            line:1
        },
        
    ],
    line2:[
      
        {
            name:"shir",
            id:1,
            img:"royal11.svg",
            line:2
        },
        
        {
            name:"shir1",
            id:2,
            img:"royal2.svg",
            line:2
        },
        {
            name:"shir2",
            id:3,
            img:"royal3.svg",
            line:2
        },
        {
            name:"shir3",
            id:4,
            img:"royal4.svg",
            line:2
        },
        {
            name:"shir3",
            id:5,
            img:"royal5.png",
            line:2
        },
        {
            name:"shir3",
            id:6,
            img:"royal6.svg",
            line:2
        },
        {
            name:"shir7",
            id:7,
            img:"royal7.svg",
            line:2
        },
        {
            name:"shir3",
            id:8,
            img:"royal8.svg",
            line:2
        },
        {
            name:"shir3",
            id:9,
            img:"royal9.svg",
            line:2
        },
      
       
    ],
    line3:[
      
        {
            name:"shir",
            id:1,
            img:"royal11.svg",
            line:3
        },
        {
            name:"shir1",
            id:2,
            img:"royal2.svg",
            line:3
        },
        
        {
            name:"shir2",
            id:3,
            img:"royal3.svg",
            line:3
        },
        {
            name:"shir3",
            id:4,
            img:"royal4.svg",
            line:3
        },
        {
            name:"shir3",
            id:5,
            img:"royal5.png",
            line:3
        },
        {
            name:"shir3",
            id:6,
            img:"royal6.svg",
            line:3
        },
        {
            name:"shir7",
            id:7,
            img:"royal7.svg",
            line:3
        },
        {
            name:"shir3",
            id:8,
            img:"royal8.svg",
            line:3
        },
        {
            name:"shir3",
            id:9,
            img:"royal9.svg",
            line:3
        },
        
      
    ],
  },
  getters: {
    GET_LINE1(state){
        
      return state.line1
    } ,   
    GET_LINE2(state){
      return state.line2
    } , 
    GET_LINE3(state){
      return state.line3
    } , 
    GET_MONEY(state){
        return state.money
    },
    GET_MINUS(state){
        return state.minus
    },
    GET_BID(state){
        return state.bid
    },
    GET_SLOT(state){
        return state.slot
    },
    GET_WIN(state){
        return state.win
    }

  },
  mutations: {
    SET_RANDOM_LINE(state,date){
        return state.line1 = date
    },
    SET_RANDOM_LINE2(state,date){
        return state.line2 = date
    },
    SET_RANDOM_LINE3(state,date){
        return state.line3 = date
    },
    SET_WIN(state,data){
      
        return state.win += state.bid * Number(data)
    },
    SET_STOP(state,data){
        return state.stop = data
    },
    SET_ADD_BID(state){
        return state.bid +=1000
    },
    SET_REMOVE_BID(state){
        if(state.bid <= 0){
            return
        }else{
            return state.bid -=1000   
        }
        
    },
    SET_LINE_ROYAL_MUTATIONS(state,data){
      
        if(state.balans){
            for(let i = 0 ; i < state[data].length;i++){
                let fist =  state[data].shift(state[data][0])
                return state[data].push(fist) 
             }
        }
      
        
    },
   
    SET_ROYAL_MINUS(state){
        
        if(state.money < 1000){
            return state.balans = false 
        }else if (state.money >= state.bid &&  state.money > 0){
            state.minus = true;
            state.money -= state.bid;  
        }else{
            return state.balans = false 
        }
        
          
        setTimeout(()=>{
            state.minus = false
        },2000)
    },
    SET_SLOT(state,data){
        return state.slot.push(state[data])
    },
    CLEAR_SLOT(state){
        return state.slot = []
    },
    
  },
  actions: {
    SET_LINE_ROYAL({commit},data){
        
        commit("SET_LINE_ROYAL_MUTATIONS",data),
        commit("SET_ROYAL_MINUS",data),
        commit("CLEAR_SLOT",data)
    },
    SET_WIN_ACTION({commit},data=0){
        commit("SET_WIN",data),
        commit("CLEAR_SLOT")
    },
    SET_RANDOM_ACTIVE({commit},data){
        commit("SET_RANDOM_LINE",data)
    },
    SET_RANDOM_ACTIVE2({commit},data){
        commit("SET_RANDOM_LINE2",data)
    },
    SET_RANDOM_ACTIVE3({commit},data){
        commit("SET_RANDOM_LINE3",data)
    }
  },
  modules: {
  }
})
