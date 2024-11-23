import './App.css'
import { MainLayout } from './MainLayout'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Country } from './Pages/Country'
import { CountryDetails } from './Pages/CountryDetails'
import { ErrorPage } from './Pages/ErrorPage'
import { Home } from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const MainRouting = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          errorElement: <ErrorPage />, 
          children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/country", element: <Country /> },
            { path: "country/:id", element: <CountryDetails /> },
            { path: "/contact", element: <Contact /> },
          ],
        },
      ]);

      return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
