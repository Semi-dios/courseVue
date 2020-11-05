Vue.component('children',{
    template:`<div bg-success text-white>
      <h5>Children : {{$store.state.number}}</h5>
      <button class="btn btn-danger" @click="$store.commit('addN')">+</button>
      <button class="btn btn-warning" @click="$store.commit('subs')">-</button>
    </div>`,
    data(){
      return{

      }
    }, 
    props: [
      `number`
    ]
});