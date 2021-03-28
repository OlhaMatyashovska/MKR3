import {createRouter,createWebHistory} from 'vue-router';
import Student from './components/Student.vue';
import Theory from './components/Theory.vue';
import Photo from './components/Photo.vue';
const Router = createRouter({  
    history:createWebHistory(),
    routes:[
     {
      path:'/student',
      component:Student
     },
     {
        path:'/theory',
        component:Theory
       },
       {
        path:'/photos',
        component:Photo
       },
]
});
export default Router;