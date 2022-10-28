import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Faq from "../../Pages/FAQ/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Error from "../../Pages/Others/Error/Error";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from './../../Pages/Others/TermsAndContions/TermsAndConditions';


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
       
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<News></News>,
                // element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/questions',
                element:<Faq></Faq>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
           {
                path: '/login',
                element: <Login></Login>
            },
             {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])