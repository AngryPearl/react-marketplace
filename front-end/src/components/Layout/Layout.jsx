import TopBar from "../Header/TopBar/TopBar";
import Footer from "../Footer/Footer";
import Logo from "../Header/Logo/Logo";
import MainMenu from "../Header/MainMenu/MainMenu";
import CurrencySelector from "../Header/CurrencySelector/CurrencySelector";
import IconMenu from "../Header/IconMenu/IconMenu";

function Layout() {
  return (
    <>
      <TopBar>
        <MainMenu />
        <Logo />
        <div>
          <CurrencySelector />
          <IconMenu />
        </div>
      </TopBar>
      <Footer />
    </>
  );
}

export default Layout;
