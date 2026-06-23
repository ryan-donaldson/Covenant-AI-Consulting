import ScrollToHash from "./ScrollToHash.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
}
