const app  = new Vue({
  el: '#app',
  data: {
    title: "Hi ! World",
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
    newFruit: '',
    total: 0,  
  background: 'bg-success',
  color: false

  },
  methods: {
    addFruit () {
      this.fruit.push({
        name: this.newFruit, state: false
      });
      this.newFruit = '';
    }
  },
  computed: {
    sumFruits() {
      this.total = 0;

      for( frui of this.fruit) {
        this.total +=  frui.count;
      }
      return this.total;
    }
  }
})