import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  getters: {
    topPaisesPoblacion(state){
      return state.paises.sort((a,b)=>
        a.population < b.population ? 1: -1 
      )
    }
  },
  mutations: {
    setPaises(state, payload){
      state.paises=payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados=payload
    }
  },
  actions: {
    async getPaises({commit}){
      try{
        const res=await fetch('https://restcountries.com/v3.1/all')
        const data=await res.json()
        commit('setPaises', data)
        console.log(data);
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
