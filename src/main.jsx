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
import ProductDetails from './Components/Mid/Home/ProductDetails.jsx';
import Error from './Components/Error.jsx';
// import Details from './Components/Mid/Home/Details.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error></Error>
  },
  {
    path: '/',
    element: <WebOutline></WebOutline>,
    children: [
      {
        path: '/',
        loader: async () => await fetch('/gadgets.json'),
        element: <HomeContent></HomeContent>
      },
      {
        path: '/product/:product_id',
        loader: async () => await fetch('/gadgets.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/stats',
        element: <StatsContent></StatsContent>
      },
      {
        path: '/dashboard',
        element: <DashboardContent></DashboardContent>,
        children: [
          {
            path: '/dashboard/cart',
            loader: async () => await fetch('/gadgets.json'),
            element: <CartList></CartList>
          },
          {
            path: '/dashboard/wish',
            loader: async () => await fetch('/gadgets.json'),
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: '/policies',
        element: <PoliciesContent></PoliciesContent>,
        loader: async () => await fetch('/policies.json')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
