const app  = new Vue({
  el: '#app',
  data: {
    title:'GYM',
    fruits: ['apple', 'pineapple','watermelon','pear', 'grapes'],
    fruit: [
      {name: 'Apple',count: 35 ,state:'false'},
      {name: 'Pineapple',count: 35 ,state:'true'},
      {name: 'Grapes',count: 35 ,state:'false'},
      {name: 'Watermelon',count: 35 ,state:'false'},
      {name: 'Pear',count: 35 ,state:'true'},
      {name: 'Guava',count: 35 ,state:'true'},
      {name: 'Orange',count: 35 ,state:'true'},
    ],
    task: [
      {
        name: 'Tarea',
        state: true
      }
    ],
    newTask: '',
    message: 'Soy Sergio',
    count: 0,
    greeting: 'Vue Lifecycle '
  
  

  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  update(){
    console.log('update');
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('Destroy');
  },
  methods: {
    deleteG: function(){
      this.$destroy();
    },
   addTask: function(event){
    event.preventDefault();
     this.task.push({
       name: this.newTask,
       state: false
     });
     console.log(this.task);
    this.newTask= "";
    localStorage.setItem('gym-vue',JSON.stringify(this.task));
   },
   editTask: function(index){
    
    console.log('Editar', index);
    this.task[index].state= true;
    localStorage.setItem('gym-vue',JSON.stringify(this.task));
   },
   deleteTask: function(index){
     this.task.splice(index,1);
     localStorage.setItem('gym-vue',JSON.stringify(this.task));
   },
   created: function(){
     let datodDB =  JSON.parse(localStorage.getItem('gym-vue'));

     if(datodDB == null) {
       this.task = [];
     }else {
       this.task =datodDB;
     }
   }
  },
  computed: {
      put(){
        return this.message.split('').reverse().join('');
      },
      color(){
        return {
          'bg-success' : this.count <= 10,
          'bg-warning' : this.count > 10 && this.count < 20,
          'bg-danger' : this.count >= 20 && this.count <= 50,
          'bg-primary' : this.count >= 50
        }
      }
  },
  
})