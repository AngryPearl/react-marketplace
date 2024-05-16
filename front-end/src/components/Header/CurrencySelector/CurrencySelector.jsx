import { useContext } from "react";
import { CURRENCIES } from "../../../constants/currencies";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import styles from "./CurrencySelector.module.css";

export default function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  return (
    <select
      className={styles.currencySelector}
      value={currency}
      onChange={(e) => {
        setCurrency(e.currentTarget.value);
        localStorage["selected_currency"] = e.currentTarget.value;
      }}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
