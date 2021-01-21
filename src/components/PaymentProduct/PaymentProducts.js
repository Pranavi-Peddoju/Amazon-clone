import React from "react";
import NumberFormat from "react-number-format";
import "./PaymentProducts.css";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../../StateProvider";

function PaymentProducts({ id, title, image, price, rating, quantity }) {
  const [{ cart }, dispatch] = useStateValue();
  var date = new Date();
  date.setDate(date.getDate() + 7);
  var finalDate = date.toDateString();
  //var finalDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
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
              <div className="delivery_dateDetails">
                <div>Delivery by: </div>
                <div className="delivery_date">{finalDate}</div>
              </div>
            </Grid>
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

export default PaymentProducts;
