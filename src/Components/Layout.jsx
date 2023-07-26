import Footer from "./Footer";
import Header from "./Header/header";

function Layout({ component }) {
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
}
export default Layout;
