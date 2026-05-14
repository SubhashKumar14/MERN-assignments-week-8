import RootLayout from './components/RootLayout'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './components/Home'
import User from './components/User'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
function App() {
    const routerObj = createBrowserRouter([
        {
            path:"/",
            element:<RootLayout/>,
            children:[
                {
                    index: true,
                    element:<Home/>
                },
                {
                    path:"user",
                    element:<User/>
                },
                {
                    path:"userslist",
                    element:<UserList/>
                },
                {
                    path:"adduser",
                    element:<AddUser/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={routerObj}/>
        </div>
    )
}

export default App