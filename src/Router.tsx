import { HashRouter, Route, Routes } from "react-router-dom";
import { UseScrollTo } from "./Components/UseScrollTo";
import { Paths } from "./routes";

export const Router = () => {
  return (
    <HashRouter>
      <UseScrollTo></UseScrollTo>
      <Routes>
        <Route path={Paths.home}></Route>
        <Route path={Paths.Login}></Route>
        <Route path={Paths.Register}></Route>
        <Route path={Paths.Man}></Route>
        <Route path={Paths.Woman}></Route>
        <Route path={Paths.FoF}></Route>
      </Routes>
    </HashRouter>
  );
};
