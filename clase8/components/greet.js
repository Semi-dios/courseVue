Vue.component('greeting',{
  template: `<article>
    <h1>{{greet}}</h1>
    <h3>El texto sgt</h3>
  </article>`,
  data(){
    return{
      greet: 'Saludo de forma estatica'
    }
  }
});