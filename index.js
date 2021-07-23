let app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!'
    }
  });
  
let app2 = new Vue({
  el:'#app2',
  data:{
    massage:'Вы загрузили эту страницу',
  }
});
let app3 =new Vue({
  el:'#app3',
  data:{
    seen: true,
    seen2:!(this.seen),
  }
})