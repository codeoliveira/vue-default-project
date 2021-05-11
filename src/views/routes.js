import { Home } from './Home';
import Auth from './../modules/auth/auth';


const auth = Auth.methods;

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter(_, __, next) {
            auth.authenticate(next, undefined, '/login');
        }
    }


]