import { ReactLocation, Router } from "@tanstack/react-location";
import Home from "../pages/Home"
import Checkout from "../pages/Checkout";
import coffeeService from "../services/coffe.service";
import Success from "../pages/Success";

const location = new ReactLocation();

export default function Routes() {
    return (
        <Router
            location={location}
            routes={[
                {
                    path: '/',
                    element: <Home />,
                    loader: async () => {
                        return {
                            coffeeList: await coffeeService.fetch()
                        }
                    }
                },
                {
                    path: '/checkout',
                    element: <Checkout />,
                },
                {
                    path: '/success',
                    element: <Success />,
                }
            ]}
        />
    )
}