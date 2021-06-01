import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    const flyingElements = document.querySelectorAll('.flying-el');
    const flyingElementsReverse = document.querySelectorAll('.flying-el-reverse');
    function fly(e){

      const x = -(window.innerWidth / 2 - e.pageX) / 70;
      const y = -(window.innerHeight / 2 - e.pageY) / 70;
      const xReverse = (window.innerWidth / 2 - e.pageX) / 70;
      const yReverse = (window.innerHeight / 2 - e.pageY) / 70;

      // console.log(x, xReverse)
      flyingElements.forEach(function (item){
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
      flyingElementsReverse.forEach(function (item){
        item.style.transform = `translate(${xReverse}px, ${yReverse}px)`;
      });

    }

    window.addEventListener('mousemove', (e)=> {
      fly(e)
    });
  }
}).$mount('#app')
