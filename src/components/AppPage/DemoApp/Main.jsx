import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import CreditCardPage from "./CreditCardPage";
import ProductPage from "./ProductPage";

const Main = () => {
  const { demoAppPage } = useStateContext();

  return <>{demoAppPage === "main" ? <ProductPage /> : <CreditCardPage />}</>;
};

export default Main;
