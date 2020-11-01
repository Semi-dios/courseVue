Vue.component('father', {
  template: `<article class="p-5 bg-dark  text-white">
      <h1>Father : {{numberFather}}</h1>
      <children :number="numberFather"  ></children>
      <button class="btn btn-danger" @click="numberFather++">+</button>
      <button class="btn btn-primary" @click="numberFather--">-</button>
  </article>`,
  data(){
    return {
      numberFather: 0
    }
  },
  props: []
});