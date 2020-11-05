Vue.component('account', {
  template: `<div class="w-100"><h6>{{number}}</h6>
  <button class="btn btn-dark" @click="number++">+</button></div>`,
  data() {
    return{
      number: 0
    }
  }
})