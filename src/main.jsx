import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Category_food from './Category_food.jsx'
import Load_food_ctg from './Load_food_ctg.jsx'
import Cart from './Cart.jsx'
const my_web = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Category_food></Category_food>,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: '/categories/:load',
        element: <Load_food_ctg></Load_food_ctg>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.load}`)
      },
      {
        path: '/cart/:id',
        element: <Cart></Cart>,
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parseInt(params.id)}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={my_web}></RouterProvider>
  </React.StrictMode>,
)
