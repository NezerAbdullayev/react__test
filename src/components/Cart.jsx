import a from "../";

function Cart({ img, name, price }) {
  console.log(name);
  return (
    <div name={name} className="card rounded-4">
      <div className="m-1">
        <div className="d-flex justify-content-start my-2 ">
          <img className="card-img-top w-auto" src={img} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}uyuy</h5>
          <p className="card-text">{price}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
