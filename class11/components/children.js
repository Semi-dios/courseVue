Vue.component('children',{
    template:`<div bg-success text-white>
      <h5>Children : {{number}}</h5>
      <button class="btn btn-danger" @click="addN(2)">+</button>
      <button class="btn btn-warning" @click="subs(2)">-</button>
    </div>`,
    data(){
      return{

      }
    }, 
  
    computed:{
      ...Vuex.mapState([
        'number'
      ])
    },
    methods: {
      ...Vuex.mapMutations(['addN','subs']),
      
    }
});