import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
        // const mainImage = document.getElementById('main-img');
        const sideMenu = document.getElementById('side-menu');
        const points = document.querySelectorAll('.cursor__point');
        // const shape = document.querySelector('.title-shape');
        let counter = 0;




        function changeImage() {
                counter =   (window.pageYOffset*6) / (window.innerHeight/2);
                // console.log(Math.round(counter));
                if (counter<0) counter = 0;
                if (counter >= 6){
                    //  mainImage.className = `main-banner__img main-banner__img--${6}`
                    //  console.log(counter);
                    //  console.log(counter);   
                }else{
                    document.querySelectorAll('.main-banner__img').forEach(item=>item.style.display="none")
                    document.querySelector(`.main-banner__img.main-banner__img--${Math.round(counter)}`).style.display="block";
                    // console.log(mainImage);
                    // mainImage.className = `main-banner__img main-banner__img--${Math.round(counter)}`;
                    // console.log(counter);   
                    counter++;
                }
            // }
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


        document.addEventListener('scroll', function (e) {
            if (window.innerWidth>=600){
                changeImage(e);
            }
        });
        window.addEventListener('scroll', ()=> {
            const isWhiteSection = elementInViewport(whiteSection);
            if (isWhiteSection) {
                sideMenu.classList.add('side-menu--dark')
            }else{
                sideMenu.classList.remove('side-menu--dark')
            }
        })
        let lastPointTime=0;
        let now=0;
        window.addEventListener('mousemove', (e) => {
            fly(e)

            const cx = e.clientX;
            const cy = e.clientY;


            if (
                e.target.parentNode && e.target.parentNode.classList?.contains('my-title')
                ||
                e.target.parentNode && e.target.parentNode.classList?.contains('main-banner__title')
            ){
                e.target.classList.add('text-gradient')
            }else{
                document.querySelector('.text-gradient')?.classList.remove('text-gradient')
                // shape.classList.remove('active');
            }
            
            points.forEach((item, idx)=> {
                item.classList.remove('d-none')
                setTimeout(()=>{
                   
                    item.style.transform = `matrix(1, 0, 0, 1, ${cx-8}, ${cy-8})`;
                },70 * idx)
            })
                lastPointTime = Date.now()
                
            });
            setInterval(()=>{
                now = Date.now()
                if ( now - lastPointTime > 100){
                    points.forEach(item=>item.classList.add('d-none'))
                }
                },60 )


    }
}).$mount('#app')

