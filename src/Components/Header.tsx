import { Container } from "react-bootstrap";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { Paths } from "../routes";
import { h_emoji_size } from "../Data/ScaleData";
export const Header = () => {
  return (
    <Container className="Header_Container">
      <div className="MainTitle">
        <Link to={{ pathname: Paths.home }}>RALPHS LAURENS</Link>
      </div>
      <div className="Menu_Box">
        <div>
          <Link to={{ pathname: Paths.Man }}>MAN</Link>
        </div>
        <div>
          <Link to={{ pathname: Paths.Woman }}>WOMAN</Link>
        </div>
      </div>

      <div className="Icon_Box">
        <CiSearch size={h_emoji_size}></CiSearch>
        <MdOutlineShoppingBag size={h_emoji_size}></MdOutlineShoppingBag>

        <Link to={{ pathname: Paths.Login }}>
          <CiUser size={h_emoji_size}></CiUser>
        </Link>
      </div>
    </Container>
  );
};
