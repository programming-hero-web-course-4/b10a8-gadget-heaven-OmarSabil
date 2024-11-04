import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebOutline from './Components/WebOutline.jsx';
import HomeContent from './Components/Mid/Home/HomeContent.jsx';
import StatsContent from './Components/Mid/Stats/StatsContent.jsx';
import CartList from './Components/Mid/Dashboard/CartList.jsx';
import WishList from './Components/Mid/Dashboard/WishList.jsx';
import PoliciesContent from './Components/Mid/Policies/PoliciesContent.jsx';
import DashboardContent from './Components/Mid/Dashboard/DashboardContent.jsx';
// import PoliciesContent from './Components/Mid/Policies/PoliciesContent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WebOutline></WebOutline>,
    children: [
      {
        path: 'home',
        element: <HomeContent></HomeContent>
      },
      {
        path: 'stats',
        element: <StatsContent></StatsContent>
      },
      {
        path: 'dashboard',
        element: <DashboardContent></DashboardContent>,
        children: [
          {
            path: '/dashboard/cart',
            element: <CartList></CartList>
          },
          {
            path: '/dashboard/wish',
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: '/policies',
        element: <PoliciesContent></PoliciesContent>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
