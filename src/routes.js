const Boards = () => import('./pages/Board')
const DashBoard = () => import('./pages/Dashboard')
const Login = () => import('./pages/Login')

// import Login from './pages/Login.vue';
// import Boards from './pages/Board.vue';
// import DashBoard from './pages/Dashboard.vue';

export const routes = [
    {
        name: "boards",
        path: '/boards',
        meta: {
            title: 'BOARD'
        },
        component: Boards
    },
    {
        name: "dashboard",
        path: '/',
        meta: {
            title: 'DASHBOARD'
        },
        component: DashBoard
    },
    {
        name: "login",
        path: '/login',
        meta: {
            title: 'Login'
        },
        component: Login
    }
]
