import React from "react";
import "./Product.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

function Product({ id, title, image, price, rating }) {
  const [{ cart, user }, dispatch] = useStateValue();

  //console.log("THIS IS OT >>>>>>>>>>>>>>>", cart)

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    // let docid = Math.floor(Math.random() * 100 + 4000);
    // console.log("CART ID >>>>>>>>>>>>>>>>>", docid);
    // db.collection("users").doc(user?.uid).collection("cart").doc(id).set({
    //   cartItem: cart,
    // });
  };

  return (
    <div className="product">
      <div className="product_info">
        <div className="product_title">
          {/* World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books):
          Perfect Motivational Gift Set */}
          {title}
        </div>
        <NumberFormat
          className="price"
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          displayType={"text"}
          prefix={"₹"}
          value={price}
        />
      </div>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image} alt={title}></img>

      <Link to={!user && "/login"}>
        <button className="addCartButton" onClick={addToBasket}>
          Add To Cart
        </button>
      </Link>
    </div>
  );
}

export default Product;
