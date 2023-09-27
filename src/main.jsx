import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import CardDetails from './Components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('../cards.json'),
        element: <Home></Home>
      },
      {
        path: "/donation",
        loader: () => fetch('../cards.json'),
        element: <Donation></Donation>
      },
      {
        path: "/statistic",
        loader: () => fetch('../cards.json'),
        element: <Statistics></Statistics>
      },
      {
        path: "/carddetails/:id",
        loader: () => fetch('../cards.json'),
        element: <CardDetails></CardDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
