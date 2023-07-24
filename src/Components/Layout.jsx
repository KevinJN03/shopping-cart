import Footer from "./Footer";
import Header from "./Header/Header";
function Layout({ component }) {
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
}
export default Layout