import React from "react";
import NumberFormat from "react-number-format";
import "./CheckoutProduct.css";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../../StateProvider";
import { db, firebaseApp } from "../../Firebase";

function CheckoutProduct({ id, title, image, price }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });

    //firebaseApp.database().ref(`/users/${user.uid}/cart/${id}`).remove();
  };
  return (
    <div className="checkoutProduct">
      <Grid container spacing={4}>
        <Grid item>
          <div className="checkoutProduct_image">
            <img alt={title} src={image} />
          </div>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div className="checkoutProduct_title">{title}</div>
              <div className="checkout_details">
                <div>In stock</div>
                <div>Eligible for FREE Shipping</div>
                <div>
                  <img
                    className="fullfilledImage"
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                    alt="amazon fullfilled"
                  ></img>
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <button
                className="checkoutProduct_button"
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </Grid>
            {/* <Grid item xs>
              {quantity}
            </Grid> */}
          </Grid>
          <Grid item>
            <NumberFormat
              className="price"
              thousandSeparator={true}
              thousandsGroupStyle="lakh"
              displayType={"text"}
              prefix={"₹"}
              value={price}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CheckoutProduct;
