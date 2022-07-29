import { CoffeeProps } from "../pages/Home/components/MenuItem";
import { api } from "./api";

const coffeeService = {
    fetch: () => {
        return new Promise<CoffeeProps[]>((resolve, reject) => {
            api.get('/coffee').then(response => {
                const coffeList = response.data.map((coffee: any) => ({
                    ...coffee,
                    price: coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
                }));

                resolve(coffeList);
            }).catch(error => {
                console.log(error);
            });
        });
    }
}

export default coffeeService;