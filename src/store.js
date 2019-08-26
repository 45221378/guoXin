import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      newsTitle:"",
      newTime:"",
      newList:[],
      newObj:{}
  },
  mutations: {
    getNewLists(state,newList){
      state.newList = newList;
    },
    getNewObj(){

    }
  },
  actions:{

  },
  getters: {
      getNewDetailById:state=>id=>{
        return state.newList.find(item=>item.id==id);
      }
  },
})
