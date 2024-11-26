import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EmployeeView from '../views/Employee/EmployeeList.vue'
import EmployeeDetails from '../views/Employee/EmployeeDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/employee',
            name: 'employee',
            component: EmployeeView
        },
        {
            path: '/employee/:id',
            name: 'employeeDetails',
            component: EmployeeDetails,
            props: true
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }     
    ]
})

export default router