Vue.component('children',{
    template:`<div bg-success text-white>
      <h5>Children : {{number}}</h5>
     
    </div>`,
    data(){
      return{

      }
    }, 
    props: [
      `number`
    ]
});