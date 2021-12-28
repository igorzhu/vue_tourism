import { createRouter, createWebHistory } from 'vue-router'
import Default from '../views/Default.vue'
import Gallery from '../components/Gallery.vue'
import regions from '../assets/js/data.js';


const routes = [
    {
        path: '/',
        name: 'Default',
        component: Default
    },
   {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
        beforeEnter: (to, from, next) => {

            let isQueryValid = false;

            if (to.query && to.query.page) {
                regions.regions.forEach(function(item, index){
                    if(item.regionId === to.query.page) {
                        isQueryValid = true;
                    }
                });
            }

            if (isQueryValid) {
                next();
            } else {
                next('/');
            }
            console.log(isQueryValid);
        }
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
