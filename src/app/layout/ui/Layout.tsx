import { Outlet } from "react-router";
import Header from "../../../widgets/header/ui/Header/Header";
import Footer from "../../../widgets/footer/ui/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  );
}
