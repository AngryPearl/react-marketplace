import TopBar from "../Header/TopBar/TopBar";
import Footer from "../Footer/Footer";
import Logo from "../Header/Logo/Logo";
import MainMenu from "../Header/MainMenu/MainMenu";
import CurrencySelector from "../Header/CurrencySelector/CurrencySelector";
import IconMenu from "../Header/IconMenu/IconMenu";
import CustomerControls from "../Header/CustomerControls/CustomerControls";
import CategoriesMenu from "../Header/CategoriesMenu/CategoriesMenu";
import { MainContent } from "../MainPage/MainContent/MainContent";

export default function Layout({ children }) {
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
        {children}
      </MainContent>
      <Footer />
    </>
  );
}
