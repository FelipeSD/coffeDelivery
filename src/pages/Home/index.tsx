import { useState } from "react";
import { MakeGenerics, useMatch } from "@tanstack/react-location";
import { CoffeeProps } from "./components/MenuItem";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import Menu from "./components/Menu";

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    coffeeList: CoffeeProps[];
    coffee: CoffeeProps;
  };
}>;

export default function Home() {
  const { data: { coffeeList } } = useMatch<LocationGenerics>();
  const [coffees, setCoffees] = useState<CoffeeProps[] | undefined>(coffeeList);

  return (
    <>
      <Header />
      <Banner />
      <Menu coffees={coffees} />
    </>
  );
}