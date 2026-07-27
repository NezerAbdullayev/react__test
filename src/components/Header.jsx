import MyPersonBtn from "./MyPersonBtn";
import Nav from "./Nav";

function Header() {
  return (
    <Nav>
      <i className="bi bi-list w-50 "></i>
      <MyPersonBtn />
    </Nav>
  );
}

export default Header;
