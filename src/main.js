import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'

Vue.config.productionTip = false
Vue.component('vue-scroll', vuescroll);

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        const flyingElements = document.querySelectorAll('.flying-el');
        const flyingElementsReverse = document.querySelectorAll('.flying-el-reverse');
        const whiteSection = document.getElementById('white-section');
        const mainImage = document.getElementById('main-img');
        const sideMenu = document.getElementById('side-menu')
        let counter = 0;



        function changeImage(e) {
            if (e.deltaY < 0) {
                if (counter === 0) return false;
                counter--;
                mainImage.className = `main-banner__img main-banner__img--${counter}`;

                console.log('scroll up')
            } else {
                if (counter === 7) return false;
                counter++;
                mainImage.className = `main-banner__img main-banner__img--${counter}`;
                console.log('scroll down')

            }
        }
        function elementInViewport(el) {
            let top = el.offsetTop;
            let left = el.offsetLeft;
            let width = el.offsetWidth;
            let height = el.offsetHeight;

            while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        }
        function fly(e) {

            const x = -(window.innerWidth / 2 - e.pageX) / 70;
            const y = -(window.innerHeight / 2 - e.pageY) / 70;
            const xReverse = (window.innerWidth / 2 - e.pageX) / 70;
            const yReverse = (window.innerHeight / 2 - e.pageY) / 70;

            // console.log(x, xReverse)
            flyingElements.forEach(function (item) {
                item.style.transform = `translate(${x}px, ${y}px)`;
            });
            flyingElementsReverse.forEach(function (item) {
                item.style.transform = `translate(${xReverse}px, ${yReverse}px)`;
            });

        }


        document.addEventListener('wheel', function (e) {
            changeImage(e);
        });
        window.addEventListener('scroll', ()=> {
            const isWhiteSection = elementInViewport(whiteSection);


            if (isWhiteSection) {
                sideMenu.classList.add('side-menu--dark')
            }else{
                sideMenu.classList.remove('side-menu--dark')
            }
        })
        window.addEventListener('mousemove', (e) => {
            fly(e)
        });


    }
}).$mount('#app')

