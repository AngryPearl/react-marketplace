import { Outlet } from "react-router-dom";
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
  return (
    <>
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
    </>
  );
}
