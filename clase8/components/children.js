Vue.component('children',{
    template:`<div bg-success text-white>
      <h5>Children : {{number}}</h5>
      <h6>Name : {{name}}</h6>
      <button class="btn btn-warning" @click="number++">+</button>
    </div>`,
    data(){
      return{
        name: 'Sergio Penagos'
      }
    }, 
    mounted() {
      this.$emit('nameChildren', name);
    },
    props: [
      `number`
    ]
});