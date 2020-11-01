const app  = new Vue({
  el: '#app',
  data: {
    title: "Hi ! World",
    fruits: ['apple', 'pineapple','watermelon','pear', 'grapes'],
    fruit: [
      {name: 'Apple', state:'false'},
      {name: 'Pineapple', state:'true'},
      {name: 'Grapes', state:'false'},
      {name: 'Watermelon', state:'false'},
      {name: 'Pear', state:'true'},
      {name: 'Guava', state:'true'},
      {name: 'Orange', state:'true'},
    ]

  }
})