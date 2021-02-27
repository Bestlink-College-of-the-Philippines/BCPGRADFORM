import { createApp, h } from 'vue'
import App from './App.vue'
import ListStudents from './components/ListStudents'
import NotFoundComponent from './components/NotFoundComponent'
import swal from 'sweetalert2'

window.Swal = swal;

import  'bootstrap/dist/css/bootstrap.min.css'

const routes = {
    '/' : App,
    '/list-students' : ListStudents
};

const Router = {
    data: () => ({
        currentRoute: window.location.pathname
      }),
    
    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(Router).mount('#app');
