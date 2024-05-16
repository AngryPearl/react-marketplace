import { useContext } from "react";
import { CURRENCIES, CURRENCY_SIGN } from "../../../constants/currencies";
import { CurrencyContext } from "../../../contexts/CurrencyContext";

export function ProductPrice({ product }) {
  const [currency, setCurrency] = useContext(CurrencyContext);

  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {CURRENCY_SIGN[currency]}
    </>
  );
}
