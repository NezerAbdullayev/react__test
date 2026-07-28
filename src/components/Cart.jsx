import a from "../";

function Cart({ img, name, price }) {
  console.log(name);
  return (
    <div name={name} className="card rounded-4">
      <div className="m-1">
        <img
          className="card-img-top w-auto mx-auto d-block"
          style={{ height: "70px" }}
          src={img}
        />

        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Buy product</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
