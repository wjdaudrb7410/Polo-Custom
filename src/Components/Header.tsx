import { Container } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Paths } from "../routes";
export const Header = () => {
  return (
    <Container
      style={{
        backgroundColor: "#fff",
        zIndex: "30",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "30px auto",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "400", letterSpacing: 2 }}>
        <Link to={{ pathname: Paths.home }}>RALPH LAUREN</Link>
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CiSearch size={24}></CiSearch>
        <MdOutlineShoppingBag size={24}></MdOutlineShoppingBag>

        <Link to={{ pathname: Paths.Login }}>
          <CiMenuBurger size={24}></CiMenuBurger>
        </Link>
      </div>
    </Container>
  );
};
