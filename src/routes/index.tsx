import { Route } from "@tanstack/react-location";
import coffeeService from "../services/coffe.service";
import Home from "../pages/Home"

const routes: Route[] = [
    {
        path: '/',
        element: <Home />,
        loader: async () => {
            return {
                coffeList: await coffeeService.fetch()
            }
        }
    },
];

export default routes;