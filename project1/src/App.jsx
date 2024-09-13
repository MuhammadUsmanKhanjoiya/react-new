import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './component/login';
import Home from './component/Home'
import SingUp from './component/SingUp';
import Chat from './component/Chat';
import Loading from './component/Loading';
import NotFound from './NotFound';
import ChatList from './component/ChatList';
import Location from './component/Location';
import MarketPlace from './component/MarketPlace';

function App() {
  
   const router  = createBrowserRouter([
    { path:"/" , element:<Loading/>},
     { path:"*" ,element: <NotFound/>},
    { path:"/login" , element:<Login/>},
    { path:"/singUp" , element:<SingUp/>},
    { path:"/home" , element:<Home/>},
    { path:"/chat" , element:<Chat/>},
    { path:"/location" , element:<Location/>},
    { path:"/chatList" , element:<ChatList/>},
    { path:"/marketPlace" , element:<MarketPlace/>},

   ]);


  return <RouterProvider router={router}  />
}

export default App
