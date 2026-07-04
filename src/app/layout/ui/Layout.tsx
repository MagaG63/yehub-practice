import { Outlet } from "react-router";
import Header from "../../../widgets/header/ui/Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      {/* <Footer /> */}
    </>
  );
}
