/**
 * Created by yiyang1990 on 2017/3/19.
 */
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Map from '../views/Map.vue'
import Form from '../views/Form.vue'

let routes = [
        {
        path: '/',
        component: Home
    },
    {
        path: '/',
        component: Home,
        children: [
            { path: 'Index', component: Index, name: 'Index' },
            { path: 'Map', component: Map, name: 'Map', meta: { keepAlive: true} },
            { path: 'Form', component: Form, name: 'Form'}
        ]
    }
]

export default routes;
