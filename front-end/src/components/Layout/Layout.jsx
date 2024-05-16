import { Outlet } from "react-router-dom";
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Footer from "../Footer/Footer";
import CategoriesMenu from "../Header/CategoriesMenu/CategoriesMenu";
import CurrencySelector from "../Header/CurrencySelector/CurrencySelector";
import CustomerControls from "../Header/CustomerControls/CustomerControls";
import IconMenu from "../Header/IconMenu/IconMenu";
import Logo from "../Header/Logo/Logo";
import MainMenu from "../Header/MainMenu/MainMenu";
import TopBar from "../Header/TopBar/TopBar";
import { MainContent } from "../MainPage/MainContent/MainContent";

export default function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRENCIES.PLN
  );

  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);

  function addProductToCart(product) {
    const newState = [...cartItems, product];
    setCartItems(newState);
  }

  return (
    <>
      <CartContext.Provider value={[cartItems, addProductToCart]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <CustomerControls>
                <CurrencySelector />
                <IconMenu />
              </CustomerControls>
            </TopBar>
            <CategoriesMenu />
            <Outlet />
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}
