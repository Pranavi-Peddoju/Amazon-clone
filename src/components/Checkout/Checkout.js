import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckProduct/CheckoutProduct";
import NumberFormat from "react-number-format";
import { getCartTotal } from "../../reducer";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg"
          alt="checkout ad"
        ></img>
        <p>
          <strong>
            Pay faster for all your shopping needs with Amazon Pay balance
          </strong>
          <br />
          Get Instant refund on cancellations | Zero payment failures
        </p>
        <div className="checkout_cart">
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
          <div className="checkout_subtotal">
            Subtotal ({cart?.length} items) :{" "}
            <strong>
              <NumberFormat
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                displayType={"text"}
                prefix={"₹"}
                value={getCartTotal(cart)}
              />
            </strong>
          </div>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
        <img
          src="https://inspirationfeed.com/wp-content/uploads/2016/05/Amazon-Ad.png"
          alt="ads"
        />
      </div>
    </div>
  );
}

export default Checkout;
