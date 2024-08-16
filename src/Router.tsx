import { HashRouter, Route, Routes } from "react-router-dom";
import { UseScrollTo } from "./Components/UseScrollTo";
import { Paths } from "./routes";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Man } from "./Pages/Man";
import { Woman } from "./Pages/Woman";
import { FoF } from "./Pages/FoF";
import { Header } from "./Components/Header";

export const Router = () => {
  return (
    <HashRouter>
      <UseScrollTo></UseScrollTo>
      <Header></Header>
      <Routes>
        <Route path={Paths.home} element={<Home></Home>}></Route>
        <Route path={Paths.Login} element={<Login></Login>}></Route>
        <Route path={Paths.Register} element={<Register></Register>}></Route>
        <Route path={Paths.Man} element={<Man></Man>}></Route>
        <Route path={Paths.Woman} element={<Woman></Woman>}></Route>
        <Route path={Paths.FoF} element={<FoF></FoF>}></Route>
      </Routes>
    </HashRouter>
  );
};
