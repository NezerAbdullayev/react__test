import Img1 from "../assets/image 1.png";
import Img2 from "../assets/image 2.svg";
import Img3 from "../assets/image 3.svg";
import Img4 from "../assets/image 4.png";
import Img5 from "../assets/image 5.png";
import Img6 from "../assets/image 6.svg";
import Cart from "../components/Cart";

function CardSection() {
  return (
    <div>
      <div
        className="d-grid gap-5 container"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          justifyContent: "center",
        }}
      >
        {data.map((itm) => (
          <Cart key={itm.id} {...itm} />
        ))}
      </div>
    </div>
  );
}

export default CardSection;

export const data = [
  {
    name: "Banana",
    price: 1.32,
    img: Img1,
  },
  {
    name: "Cabbage",
    price: 0.82,
    img: Img2,
  },
  {
    name: "Tomatto",
    price: 1.23,
    img: Img3,
  },
  {
    name: "Egg plant",
    price: 0.82,
    img: Img4,
  },
  {
    name: "Lettuce",
    price: 1.02,
    img: Img5,
  },
  {
    name: "Pottato",
    price: 2.3,
    img: Img6,
  },
];
