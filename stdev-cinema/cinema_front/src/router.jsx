import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Cinema from "./views/Cinema";
import Main from "./views/Main";
import Rooms from "./views/Rooms";
import Movies from "./views/Movies";
import Moviedetailed from "./views/Moviedetailed";
import Seats from "./views/Seats";
import DefaultLayout from "./components/DefaultLayout";
import AdminRooms from "./views/AdminRooms";
import AdminMovies from "./views/AdminMovies";
import AdminSeans from "./views/AdminSeans";
import AdminMoviesUpdate from "./views/AdminMoviesUpdate";
import AdminRoomUpdate from "./views/AdminRoomUpdate";
import AdminSeansUpdate from "./views/AdminSeansUpdate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/main" />
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/cinema',
                element: <Cinema />
            },  
            {
                path: '/main',
                element: <Main />
            },  
            {
                path: '/admin',
                element: <Admin />
            },  
            {
                path: '/login',
                element: <Login />
            },  
            {
                path: '/rooms',
                element: <Rooms />
            }, 
            {
                path: '/movies',
                element: <Movies />
            },     
            {
                path: '/movies/:id',
                element: <Movies />
            }, 
            {
                path: '/movie_detailed/:seans_id/:movie_id',
                element: <Moviedetailed />
            }, 
            {
                path: '/movies/:id/:id',
                element: <Seats />
            } ,
            {
                path: '/seats/:id',
                element: <Seats />
            } ,
            {
                path: '/admin/room',
                element: <AdminRooms />
            } ,
            {
                path: '/admin/movie',
                element: <AdminMovies />
            } ,
            {
                path: '/admin/seans',
                element: <AdminSeans />
            } ,
            {
                path: '/admin/room/update/:id',
                element: <AdminRoomUpdate />
            } ,
            {
                path: '/admin/room/new',
                element: <AdminMoviesUpdate />
            },             
            {
                path: '/admin/movie/update/:id',
                element: <AdminMoviesUpdate />
            } ,
            {
                path: '/admin/seans/update/:id',
                element: <AdminSeansUpdate />
            } ,
            {
                path: '/admin/movie/new',
                element: <AdminMoviesUpdate />
            } ,
            {
                path: '/admin/seans/new',
                element: <AdminSeansUpdate />
            } 
        ]
    },
 
])

export default router;