import MyBasketBtn from "./MyBasketBtn";
import Nav from "./Nav";

function Header() {
  return (
    <Nav>
      <i className="bi bi-list w-50 "></i>
      <MyBasketBtn />
    </Nav>
  );
}

export default Header;
