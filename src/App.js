import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import LayoutPage from './components/LayoutPage';

// Lazy load nested components for services
const Consulting = lazy(() => import('./components/Consulting'));
const Development = lazy(() => import('./components/Development'));
const Employee = lazy(()=>import('./components/Employee'));
const Customer = lazy(()=> import('./components/Customer'));

//Lazy load sub nested component
const Daily = lazy(()=> import('./components/Daily'));
const Monthly = lazy(()=>import('./components/Monthly'));


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<LayoutPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/services",
          element:<Services/>,
          children:[
            {
              path:"/services/consulting",
              element:<Consulting/>,
            },
            {
              path:"/services/development",
              element:<Development/>,
            }
          ]
        },
        {
          path:"/contact",
          element:<Contact/>,
          children:[
            {
              path:"/contact/employee",
              element:<Employee/>,
            },
            {
              path:"/contact/customer",
              element:<Customer/>,
              children:[
                {
                  path:"/contact/customer/daily",
                  element:<Daily/>,
                },
                {
                  path:"/contact/customer/monthly",
                  element:<Monthly/>,
                }
              ]
            }
          ]
        }
      ]
    }
  ]);
  return (
      <Suspense fallback={<div>Loading...</div>}> 
      <RouterProvider router={appRouter}/>
      </Suspense>
  );
}

export default App;
